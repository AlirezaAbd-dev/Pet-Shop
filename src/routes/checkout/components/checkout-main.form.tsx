import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { useAuthStore } from '@/store/auth.store';

import {
  CheckoutValidationType,
  checkoutValidation,
} from '../checkout.validation';
import { AddressResponse } from '../queries/addresses.query';
import CheckoutForm from './checkout.form';
import OrderDetails from './order-details.component';

type CheckoutMainFormProps = {
  address: AddressResponse[];
};

const CheckoutMainForm = (props: CheckoutMainFormProps) => {
  const profile = useAuthStore((s) => s.profile);

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
            phone: profile?.phone_number,
          },
        }
      : {}),
  });

  function submitHandler(values: CheckoutValidationType) {
    console.log(values);
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-6  md:grid md:grid-cols-12 px-5 md:px-20 mt-10 md:mt-16"
    >
      <CheckoutForm address={props.address} control={control} />
      <OrderDetails />
    </form>
  );
};

export default CheckoutMainForm;
