'use client';

import Link from 'next/link';
import React, { useEffect, useState, useTransition } from 'react';

import SvgSearch18 from '@/assets/svg/search-18.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LoadingSpinner from '@/components/ui/loading-spinner';
import Pagination from '@/components/ui/pagination';

import useAdminProductsQuery from './admin-products.query';
import ProductsTable from './products.table';

const AdminProducts = () => {
  const [inputValue, setInputValue] = useState('');

  const {
    query: { data, isPending },
    page,
    setPage,
    setSearch,
  } = useAdminProductsQuery();

  const [_isPending, startTransition] = useTransition();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearch(inputValue);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [inputValue]);

  return (
    <main className="mt-8">
      <section className="flex justify-between">
        <div className="px-3 py-2 flex gap-2 items-center rounded-xl bg-white border border-nature-900 w-[400px]">
          <SvgSearch18 />
          <Input
            value={inputValue}
            onChange={(e) =>
              startTransition(() => {
                setInputValue(e.target.value);
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

      {isPending && <LoadingSpinner className="mt-20" />}

      {!isPending && data && (
        <section className="mt-8 bg-white rounded-lg border border-nature-800 overflow-hidden">
          <ProductsTable products={data.results} />
        </section>
      )}

      {!isPending && data && (
        <section className="flex justify-center mt-11">
          <Pagination
            count={data?.count}
            itemPerPage={10}
            page={page}
            onPageChange={(page) => {
              setPage(page);
            }}
          />
        </section>
      )}
    </main>
  );
};

export default AdminProducts;
