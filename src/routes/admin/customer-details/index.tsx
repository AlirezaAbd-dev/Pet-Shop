import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import OrdersTable from '../orders/orders.table';

const AdminCustomerDetails = () => {
  return (
    <main className="mt-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbLink href="/panel/admin/customers">
            Customer managment
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-text-500">
            Details User
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="mt-8 bg-white p-6">
        <div className="flex justify-between">
          <p className="flex gap-3">
            Username
            <span className="font-bold">Milad saeedi</span>
          </p>
          <p className="flex gap-3">
            Phone
            <span className="font-bold">09304673884</span>
          </p>
          <p className="flex gap-3">
            Email
            <span className="font-bold">milad138001@gmail.com</span>
          </p>
          <p className="flex gap-3">
            Password
            <span className="font-bold">MMilad!234</span>
          </p>
        </div>

        <p className="flex gap-3 mt-8">
          Street address
          <span className="font-bold">
            Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
            elit
          </span>
        </p>

        <div className="flex justify-between mt-4">
          <p className="flex gap-3">
            Country / Region
            <span className="font-bold">Iran</span>
          </p>
          <p className="flex gap-3">
            Town / City
            <span className="font-bold">Azadi 5</span>
          </p>
          <p className="flex gap-3">
            Postcode
            <span className="font-bold">677123411</span>
          </p>
          <p className="flex gap-3">
            County
            <span className="font-bold">_</span>
          </p>
        </div>
      </section>

      <section className="mt-8 bg-white rounded-xl border border-nature-800 overflow-hidden">
        <OrdersTable />
      </section>
    </main>
  );
};

export default AdminCustomerDetails;
