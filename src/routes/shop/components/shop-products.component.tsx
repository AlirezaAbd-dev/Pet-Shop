'use client';

import Icon from '@/components/icon';
import { Input } from '@/components/ui/input';

import SvgFilterMobile from '@icons/filter-sort-menu-mobile.svg';
import SvgSearchMobile from '@icons/search-loupe-custom-mobile.svg';
import SvgSearch from '@icons/search-loupe-custom.svg';

import { useFilterModalStore } from '../store/filter-moda.store';
import ShopProductCard from './cards/shop-product-card.component';

const ShopProducts = () => {
  const setIsModalOpen = useFilterModalStore((s) => s.setIsModalOpen);

  return (
    <main className="md:col-span-9">
      <section className="flex justify-between items-center">
        <h1 className="md:hidden font-nunito font-black text-xl">Shop</h1>
        <div className="hidden md:flex items-center gap-6">
          <Icon className="flex items-center gap-2 text-xl font-bold">
            <SvgFilterMobile />
            Sort by:
          </Icon>
          <p className="text-xl text-text-400 cursor-pointer">cheapest</p>
          <p className="text-xl text-text-400 cursor-pointer">expensive</p>
        </div>
        <p className="md:text-base text-xs text-text-400">
          Showing 12 of 28 results
        </p>
      </section>
      <section className="md:hidden flex items-center mt-4 gap-4">
        <div className="flex items-center gap-1 md:gap-2 w-full h-11 md:h-12 bg-nature-600 rounded-2xl px-3">
          <Icon className="text-text-200">
            <SvgSearch className="hidden md:block w-8 h-8" />
            <SvgSearchMobile className="md:hidden w-6 h-6" />
          </Icon>
          <Input
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

      <section className="flex flex-col gap-4 md:gap-x-6 md:gap-y-8 md:grid md:grid-cols-3 mt-6">
        <ShopProductCard />
        <ShopProductCard />
        <ShopProductCard />
        <ShopProductCard />
        <ShopProductCard />
        <ShopProductCard />
      </section>
    </main>
  );
};

export default ShopProducts;
