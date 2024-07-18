'use client';

import Icon from '@/components/icon';
import { Input } from '@/components/ui/input';

import SvgSearch from '@icons/search-loupe-custom.svg';

import { useFiltersStore } from '../store/filters.store';
import Filters from './filters/filters.component';

const ShopFilter = () => {
  const search = useFiltersStore((s) => s.search);
  const setSearch = useFiltersStore((s) => s.setSearch);
  const resetFilter = useFiltersStore((s) => s.resetFilter);

  return (
    <main className="hidden md:flex flex-col col-span-3 h-min border border-nature-800 rounded-3xl px-4 pb-1">
      <div className="w-full flex justify-between items-center mt-6">
        <p className="font-bold text-xl">Filters</p>
        <p
          className="text-text-300 cursor-pointer"
          onClick={() => resetFilter()}
        >
          Reset
        </p>
      </div>
      <div className="flex items-center mt-6 gap-1 md:gap-2 w-full h-11 md:h-12 bg-nature-600 rounded-2xl px-3">
        <Icon className="text-text-200">
          <SvgSearch className="hidden md:block w-8 h-8" />
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
      <Filters />
    </main>
  );
};

export default ShopFilter;
