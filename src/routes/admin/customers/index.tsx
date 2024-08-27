'use client';

import React, { useState, useTransition } from 'react';

import SvgSearch18 from '@/assets/svg/search-18.svg';
import { Input } from '@/components/ui/input';
import LoadingSpinner from '@/components/ui/loading-spinner';

import useAdminUserQuery from './admin-users.query';
import CustomersTable from './customers.table';

const AdminCustomers = () => {
  const [search, setSearch] = useState('');
  const [_isPending, startTransition] = useTransition();

  const { data, isPending } = useAdminUserQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data) {
    const users = data
      .filter(
        (d) =>
          d.full_name?.includes(search) ||
          d.email.includes(search) ||
          d.phone_number?.toString().includes(search),
      )
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
        </section>

        <section className="mt-8 bg-white border border-[#E7E7E7] rounded-lg">
          <CustomersTable users={users} />
        </section>
      </main>
    );
  }
};

export default AdminCustomers;
