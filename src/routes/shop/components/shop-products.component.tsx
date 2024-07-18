'use client';

import Icon from '@/components/icon';
import { Input } from '@/components/ui/input';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { cn } from '@/lib/utils';

import SvgFilterMobile from '@icons/filter-sort-menu-mobile.svg';
import SvgSearchMobile from '@icons/search-loupe-custom-mobile.svg';
import SvgSearch from '@icons/search-loupe-custom.svg';

import useFiltersQuery from '../filters.query';
import { SORT_FILTERS } from '../shop.constants';
import { useFilterModalStore } from '../store/filter-moda.store';
import { useFiltersStore } from '../store/filters.store';
import ShopProductCard from './cards/shop-product-card.component';

const ShopProducts = () => {
  const { data, isPending } = useFiltersQuery();

  const setIsModalOpen = useFilterModalStore((s) => s.setIsModalOpen);

  const search = useFiltersStore((s) => s.search);
  const setSearch = useFiltersStore((s) => s.setSearch);
  const sortBy = useFiltersStore((s) => s.sortBy);
  const setSortBy = useFiltersStore((s) => s.setSortBy);

  return (
    <main className="md:col-span-9">
      <section className="flex justify-between items-center">
        <h1 className="md:hidden font-nunito font-black text-xl">Shop</h1>
        <div className="hidden md:flex items-center gap-6">
          <Icon className="flex items-center gap-2 text-xl font-bold">
            <SvgFilterMobile />
            Sort by:
          </Icon>
          {SORT_FILTERS.map((item) => (
            <p
              key={item.name}
              className={cn(
                'text-xl text-text-400 cursor-pointer select-none',
                sortBy === item.value ? 'underline' : '',
              )}
              onClick={() => {
                setSortBy(item.value);
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
        <p className="md:text-base text-xs text-text-400">
          Showing {data?.length || 0} of {data?.length || 0} results
        </p>
      </section>
      <section className="md:hidden flex items-center mt-4 gap-4">
        <div className="flex items-center gap-1 md:gap-2 flex-1 h-11 md:h-12 bg-nature-600 rounded-2xl px-3">
          <Icon className="text-text-200">
            <SvgSearch className="hidden md:block w-8 h-8" />
            <SvgSearchMobile className="md:hidden w-6 h-6" />
          </Icon>
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search product..."
            className="bg-transparent placeholder:text-text-200 font-nunito border-none text-base"
          />
        </div>
        <Icon
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="flex items-center justify-center w-11 h-11 rounded-xl bg-nature-600"
        >
          <SvgFilterMobile />
        </Icon>
      </section>

      {isPending && <LoadingSpinner className="mt-6" />}

      {!isPending && data && data.length === 0 && (
        <p className="mt-10 text-center text-lg">Nothing to show</p>
      )}

      {!isPending && data && data?.length > 0 && (
        <section className="flex flex-col gap-4 md:gap-x-6 md:gap-y-8 md:grid md:grid-cols-3 mt-6">
          {data.map((item) => (
            <ShopProductCard key={item.id} {...item} />
          ))}
        </section>
      )}
    </main>
  );
};

export default ShopProducts;
