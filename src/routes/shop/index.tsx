'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { Brand, Category } from '@/app/(core)/shop/page';
import Footer from '@/components/shared/footer.component';

import FilterModal from './components/modals/filter';
import ShopBreadcrumb from './components/shop-breadcrumb.component';
import ShopFilter from './components/shop-filter.component';
import ShopProducts from './components/shop-products.component';
import { useFiltersStore } from './store/filters.store';

type ShopProps = {
  brands: Brand[];
  categories: Category[];
};

const Shop = (props: ShopProps) => {
  const searchParams = useSearchParams();

  const category = searchParams.get('category');

  const setFilters = useFiltersStore((s) => s.setFilters);
  const setCategory = useFiltersStore((s) => s.setCategory);
  const resetFilter = useFiltersStore((s) => s.resetFilter);

  useEffect(() => {
    setFilters(props);
    if (category && typeof +category == 'number') {
      resetFilter();
      setCategory(Number(category));
    }
  }, [category]);

  return (
    <>
      <FilterModal />
      <ShopBreadcrumb />
      <p className="hidden md:block font-black font-nunito text-2xl px-20 mt-8">
        Shop
      </p>
      <div className="mt-6 md:grid md:grid-cols-12 md:gap-6 px-5 md:px-20">
        <ShopFilter />
        <ShopProducts />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
