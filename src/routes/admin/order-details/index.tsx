'use client';

import LoadingSpinner from '@/components/ui/loading-spinner';
import { OrderStatus } from '@/routes/(dashboard)/orders/constants/orders.constants';

import OrderDetailsBreadcrumb from './components/order-details-breadcrumb.component';
import OrderDetailsOrderItemCard from './components/order-details-order-item.component';
import OrderDetailsRightSection from './components/order-details-right-section.component';
import OrderDetailsUploadImage from './components/order-details-upload-image.components';
import useAdminOrderDetailsQuery from './queries/admin-order-details.query';

const STATUS_SLIDER: { status: OrderStatus; color: string; value: number }[] = [
  {
    status: 'cancelled',
    color: 'bg-error-500',
    value: 100,
  },
  {
    status: 'delivered',
    color: 'bg-link',
    value: 100,
  },
  {
    status: 'pending',
    color: 'bg-success-500',
    value: 12.5,
  },
  {
    status: 'shipped',
    color: 'bg-warning-500',
    value: 87.5,
  },
  {
    status: 'inventory_confirmation',
    color: 'bg-link',
    value: 75,
  },
  {
    status: 'inventory_reservations',
    color: 'bg-link',
    value: 50,
  },
  {
    status: 'pre_factored_paid',
    color: 'bg-link',
    value: 62.5,
  },
  {
    status: 'salesperson_pre_factored',
    color: 'bg-link',
    value: 37.5,
  },
  {
    status: 'salesperson_confirmation',
    color: 'bg-link',
    value: 25,
  },
];

const AdminOrderDetails = () => {
  const { data, isPending } = useAdminOrderDetailsQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data) {
    const status = STATUS_SLIDER.find((s) => s.status === data.status)!;
    return (
      <main className="mt-6 pb-20">
        <OrderDetailsBreadcrumb />

        <section className="mt-8 bg-white rounded-2xl p-6">
          <div className="flex justify-between">
            {/* left section */}
            <div>
              <p className="font-bold text-xl">Details order / #{data?.id}</p>
              <div className="w-full flex gap-6 mt-12">
                <p className="flex gap-3">
                  Order date
                  <span className="font-bold">
                    {new Date(data.created_at).toLocaleDateString('en-us', {
                      dateStyle: 'medium',
                    })}
                  </span>
                </p>
                <p className="flex gap-3">
                  Transferee
                  <span className="font-bold">{data.user_full_name}</span>
                </p>
                <p className="flex gap-3">
                  Phone
                  <span className="font-bold">
                    {data.order_address?.phone_number || '_'}
                  </span>
                </p>
              </div>
              <p className="flex gap-3 mt-8">
                Street address
                <span className="font-bold">
                  {data.order_address?.street || '_'}
                </span>
              </p>

              <div className="flex gap-6 mt-4">
                <p className="flex gap-3">
                  Country / Region
                  <span className="font-bold">
                    {data.order_address?.country || '_'}
                  </span>
                </p>
                <p className="flex gap-3">
                  Town / City
                  <span className="font-bold">
                    {data.order_address?.city || '_'}
                  </span>
                </p>
                <p className="flex gap-3">
                  Postcode
                  <span className="font-bold">
                    {data.order_address?.post_code || '_'}
                  </span>
                </p>
              </div>
            </div>
            {/* end of left section */}
            {/* right section */}
            <OrderDetailsRightSection
              color={status.color}
              status={data.status}
              value={status.value}
            />
            {/* end of right section */}
          </div>
          <div className="mt-8 w-full border-t border-nature-900"></div>

          <ul className="grid grid-cols-2 gap-y-8 mt-8">
            {data.order_items.map((o) => (
              <OrderDetailsOrderItemCard
                key={o.id}
                id={o.id}
                image={o.product.image_urls[0]}
                name={o.product.name}
                price={o.price}
                quantity={o.quantity}
                weight={o.product.weight}
              />
            ))}
          </ul>
        </section>

        <OrderDetailsUploadImage receipt={data.receipt} id={data.id} />
      </main>
    );
  }
};

export default AdminOrderDetails;
