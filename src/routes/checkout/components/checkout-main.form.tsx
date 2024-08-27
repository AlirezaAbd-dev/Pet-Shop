import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { queryClient } from '@/app/providers';
import queryKeys from '@/lib/constants/query-keys.constants';
import { useCartStore } from '@/store/cart.store';

import {
  CheckoutValidationType,
  checkoutValidation,
} from '../checkout.validation';
import { AddressResponse } from '../queries/addresses.query';
import useCreateOrderMutation from '../queries/create-order.mutation';
import useEditAddressMutation from '../queries/edit-address.mutation';
import CheckoutForm from './checkout.form';
import OrderDetails from './order-details.component';

type CheckoutMainFormProps = {
  address: AddressResponse[];
};

const CheckoutMainForm = (props: CheckoutMainFormProps) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync: editAddress } = useEditAddressMutation();
  const { mutateAsync: createOrder } = useCreateOrderMutation();

  const clearCart = useCartStore((s) => s.clearCart);

  const { control, handleSubmit } = useForm<CheckoutValidationType>({
    resolver: zodResolver(checkoutValidation),
    ...(!!props.address[0]
      ? {
          defaultValues: {
            city: props.address[0].city,
            country: props.address[0].country,
            county: props.address[0].county,
            postCode: props.address[0].post_code,
            street: props.address[0].street,
            phone: props.address[0].phone_number,
          },
        }
      : {}),
  });

  async function submitHandler(values: CheckoutValidationType) {
    setIsLoading(true);
    try {
      const editAddressResponse = await editAddress({
        ...(props.address[0] ? { id: props.address[0].id } : {}),
        city: values.city,
        country: values.country,
        county: values.county,
        phone_number: values.phone,
        post_code: values.postCode,
        street: values.street,
      });

      const createOrderResponse = await createOrder({
        address_id: editAddressResponse.data.id,
        order_note: values.notes,
      });

      clearCart();
      queryClient.clear();

      router.push(
        `/cart/order-complete?order-id=${createOrderResponse.data.id}`,
      );
    } catch (err: any) {
      toast.error(err.response.data?.message || 'Oops, something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-6  md:grid md:grid-cols-12 px-5 md:px-20 mt-10 md:mt-16"
    >
      <CheckoutForm address={props.address} control={control} />
      <OrderDetails isLoading={isLoading} />
    </form>
  );
};

export default CheckoutMainForm;
