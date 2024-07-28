'use client';

import React from 'react';

import SvgDelete32 from '@/assets/svg/Trash, Delete, Bin32.svg';
import SvgEye32 from '@/assets/svg/eye32.svg';
import SvgFileBlankListBlue32 from '@/assets/svg/file-blank-list-blue32.svg';
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combobox';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { Slider } from '@/components/ui/slider';
import { OrderStatus } from '@/routes/(dashboard)/orders/constants/orders.constants';

import useAdminOrderDetailsQuery from './admin-order-details.query';
import OrderDetailsBreadcrumb from './components/orderDetailsBreadcrumb.component';

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
    value: 30,
  },
  {
    status: 'shipped',
    color: 'bg-warning-500',
    value: 60,
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
            <div className="w-[251px]">
              <p className="font-bold">{data.status}</p>
              <Slider
                value={[status?.value]}
                className="mt-4"
                thumbClassname={`${status.color} border-inherit`}
                rangeClassname={`${status.color}`}
              />
              <p className="mt-8">Order state</p>
              <Combobox
                name="status"
                buttonClassName="mt-3"
                data={[
                  { label: 'delivered', value: 'delivered' },
                  { label: 'cancelled', value: 'cancelled' },
                ]}
              />
              <Button className="mt-4 md:text-sm w-full">Confirmation</Button>
            </div>
            {/* end of right section */}
          </div>
          <div className="mt-8 w-full border-t border-nature-900"></div>

          <ul className="grid grid-cols-2 gap-y-8 mt-8">
            {data.order_items.map((o) => (
              <li key={o.id} className="flex gap-6">
                <div className="flex justify-center items-center w-[160px] h-[160px] bg-nature-700 rounded-xl">
                  <img
                    src={o.product.image_urls[0]}
                    className="h-[133px] w-auto"
                  />
                </div>
                <div>
                  <p className="text-xl font-bold">{o.product.name}</p>
                  <p className="mt-4 font-semibold text-lg text-text-400">
                    {o.product.weight}KG
                  </p>
                  <p className="mt-4 font-semibold text-lg text-text-400">
                    Number: {o.quantity}
                  </p>
                  <p className="mt-4 font-semibold text-lg text-text-400">
                    Price: ${o.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 bg-white border border-[#004FFE] border-dashed rounded-2xl py-6 flex flex-col items-center">
          <span className="w-[62px] h-[62px] flex items-center justify-center bg-[#004FFE] bg-opacity-5 rounded-xl">
            <SvgFileBlankListBlue32 />
          </span>
          <p className="font-bold text-xl mt-4">upload file</p>
          <p className="mt-4">
            Upload the payment receipt sent by the customer
          </p>
        </section>
        <section className="mt-6 flex justify-between items-center">
          <p className="text-lg font-semibold ">Name File</p>
          <div className="flex gap-3 items-center">
            <SvgEye32 />
            <SvgDelete32 />
          </div>
        </section>
      </main>
    );
  }
};

export default AdminOrderDetails;
