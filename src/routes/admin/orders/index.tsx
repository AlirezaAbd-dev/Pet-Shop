'use client';

import React, { useState, useTransition } from 'react';

import SvgSearch18 from '@/assets/svg/search-18.svg';
import { Combobox } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import LoadingSpinner from '@/components/ui/loading-spinner';
import {
  ORDER_STATUS_TABS,
  OrderStatusTabsType,
} from '@/routes/(dashboard)/orders/constants/orders.constants';

import useAdminOrdersQuery from './admin-orders.query';
import OrdersTable from './orders.table';

const STATUSES = ORDER_STATUS_TABS.map((o) => ({
  label: o.name,
  value: o.name,
}));

const AdminOrders = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatusTabsType>();

  const [_isPending, startTransition] = useTransition();

  const { data, isPending } = useAdminOrdersQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data) {
    const filteredOrders = data
      .filter((d) => {
        if (statusFilter || search)
          return (
            (search
              ? d.user_full_name?.includes(search) ||
                d.id.toString().includes(search)
              : true) &&
            (statusFilter ? d.status === statusFilter?.toLowerCase() : true)
          );
        else {
          return true;
        }
      })
      .toReversed();

    return (
      <main className="mt-8">
        <section className="flex justify-between">
          <div className="px-3 py-2 flex gap-2 items-center rounded-xl border border-nature-900 w-[400px]">
            <SvgSearch18 />
            <Input
              value={search}
              onChange={(e) =>
                startTransition(() => {
                  setSearch(e.target.value);
                })
              }
              className="bg-transparent border-none md:p-0 md:h-8 w-full"
              placeholder="Type to Search"
            />
          </div>
          <div className="w-[300px]">
            <Combobox
              data={STATUSES}
              defaultValue={statusFilter}
              containerClassName="w-[300px]"
              onSelect={(_name, value) => {
                setStatusFilter(value);
              }}
              name="statuses"
            />
          </div>
        </section>

        <section className="mt-8 bg-white border border-[#E7E7E7] rounded-lg">
          <OrdersTable
            orders={filteredOrders.map((o) => ({
              date: o.created_at,
              orderId: o.id,
              price: o.total_price,
              state: o.status,
              username: o.user_full_name,
            }))}
          />
        </section>
      </main>
    );
  }
};

export default AdminOrders;
