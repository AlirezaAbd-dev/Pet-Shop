'use client';

import React from 'react';

import SvgSearch18 from '@/assets/svg/search-18.svg';
import { Combobox } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import { ORDER_STATUS_TABS } from '@/routes/(dashboard)/orders/constants/orders.constants';

import OrdersTable from './orders.table';

const STATUSES = ORDER_STATUS_TABS.map((o) => ({
  label: o.name,
  value: o.name,
}));

const AdminOrders = () => {
  return (
    <main className="mt-8">
      <section className="flex justify-between">
        <div className="px-3 py-2 flex gap-2 items-center rounded-xl border border-nature-900 w-[400px]">
          <SvgSearch18 />
          <Input
            className="bg-transparent border-none md:p-0 md:h-8 w-full"
            placeholder="Type to Search"
          />
        </div>
        <div className="w-[173px]">
          <Combobox data={STATUSES} defaultValue="Delivered" name="statuses" />
        </div>
      </section>

      <section className="mt-8 bg-white border border-[#E7E7E7] rounded-lg">
        <OrdersTable />
      </section>
    </main>
  );
};

export default AdminOrders;
