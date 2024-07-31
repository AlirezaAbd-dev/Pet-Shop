'use client';

import Link from 'next/link';
import React, { useState, useTransition } from 'react';

import SvgSearch18 from '@/assets/svg/search-18.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import ProductsTable from './products.table';

const AdminProducts = () => {
  const [search, setSearch] = useState('');
  const [_isPending, startTransition] = useTransition();

  return (
    <main className="mt-8">
      <section className="flex justify-between">
        <div className="px-3 py-2 flex gap-2 items-center rounded-xl bg-white border border-nature-900 w-[400px]">
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
        <Link href={'/panel/admin/products/add'}>
          <Button className="w-[252px] md:text-base rounded-xl">
            Add product
          </Button>
        </Link>
      </section>

      <section className="mt-8 bg-white rounded-lg border border-nature-800 overflow-hidden">
        <ProductsTable />
      </section>
    </main>
  );
};

export default AdminProducts;
