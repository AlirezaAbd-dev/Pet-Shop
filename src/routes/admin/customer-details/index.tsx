'use client';

import React from 'react';

import LoadingSpinner from '@/components/ui/loading-spinner';

import OrdersTable from '../orders/orders.table';
import useAdminUserDetailQuery from './admin-user-details.query';

const AdminCustomerDetails = () => {
  const { data, isPending } = useAdminUserDetailQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data)
    return (
      <main className="mt-6">
        <section className="mt-8 bg-white p-6">
          <div className="flex justify-between">
            <p className="flex gap-3">
              Username
              <span className="font-bold">{data.profile.full_name}</span>
            </p>
            <p className="flex gap-3">
              Phone
              <span className="font-bold">
                {data.addresses[0]?.phone_number || '_'}
              </span>
            </p>
            <p className="flex gap-3">
              Email
              <span className="font-bold">{data.profile.email}</span>
            </p>
            <p className="flex gap-3">
              Password
              <span className="font-bold">*********</span>
            </p>
          </div>

          <p className="flex gap-3 mt-8">
            Street address
            <span className="font-bold">
              {data.addresses[0]?.street || '_'}
            </span>
          </p>

          <div className="flex justify-between mt-4">
            <p className="flex gap-3">
              Country / Region
              <span className="font-bold">
                {data.addresses[0]?.country || '_'}
              </span>
            </p>
            <p className="flex gap-3">
              Town / City
              <span className="font-bold">
                {data.addresses[0]?.city || '_'}
              </span>
            </p>
            <p className="flex gap-3">
              Postcode
              <span className="font-bold">{data.addresses[0]?.post_code}</span>
            </p>
            <p className="flex gap-3">
              County
              <span className="font-bold">{data.addresses[0]?.county}</span>
            </p>
          </div>
        </section>

        <section className="mt-8 bg-white rounded-xl border border-nature-800 overflow-hidden">
          <OrdersTable
            orders={data.orders.map((o) => ({
              date: o.created_at,
              orderId: o.id,
              price: o.total_price,
              state: o.status,
              username: data.profile.full_name,
            }))}
          />
        </section>
      </main>
    );
};

export default AdminCustomerDetails;
