import Link from 'next/link';
import React from 'react';

import Icon from '@/components/icon';
import { Input } from '@/components/ui/input';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { cn } from '@/lib/utils';

import SvgSearch from '@icons/search-loupe-custom-mobile.svg';

import useSearchQuery from '../search/search.query';

const MobileSearch = () => {
  const {
    query: { data, isPending },
    search,
    setSearch,
  } = useSearchQuery();

  const products = data?.slice(0, 6) || [];

  return (
    <>
      <div className="flex items-center w-full h-[44px] bg-nature-600 rounded-xl px-3">
        <Icon className="text-text-200">
          <SvgSearch />
        </Icon>
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search product..."
          autoFocus={false}
          className="bg-transparent placeholder:text-text-200 font-nunito border-none text-xs pl-1"
        />
      </div>
      {search.length >= 3 && (
        <ul className="w-full mt-3 rounded-xl flex flex-col gap-3">
          {isPending && <LoadingSpinner className="scale-50" />}
          {!isPending && data?.length === 0 && (
            <p className="text-center text-text-300 font-semibold text-sm">
              Nothing found
            </p>
          )}
          {!isPending &&
            data &&
            products.map((item, index) => (
              <Link key={item.id} href={`/product/${item.id}`}>
                <li className={cn('text-sm pb-3 border-b border-nature-900')}>
                  {item.name}
                </li>
              </Link>
            ))}
        </ul>
      )}
    </>
  );
};

export default MobileSearch;
