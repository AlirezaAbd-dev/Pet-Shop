'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { Brand, Category } from '@/app/(core)/shop/page';
import Footer from '@/components/shared/footer.component';

import { SubCategory } from '../admin/sub-categories/queries/admin-sub-categories.query';
import { Pet } from '../home';
import FilterModal from './components/modals/filter';
import ShopBreadcrumb from './components/shop-breadcrumb.component';
import ShopFilter from './components/shop-filter.component';
import ShopProducts from './components/shop-products.component';
import { useFiltersStore } from './store/filters.store';

type ShopProps = {
  brands: Brand[];
  categories: Category[];
  pets: Pet[];
  subCategories: SubCategory[];
};

const Shop = (props: ShopProps) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const pet = searchParams.get('pet');
  const promotion = searchParams.get('promotion');

  const setFilters = useFiltersStore((s) => s.setFilters);
  const setCategory = useFiltersStore((s) => s.setCategory);
  const setPet = useFiltersStore((s) => s.setPet);
  const setPromotion = useFiltersStore((s) => s.setPromotion);
  const resetFilter = useFiltersStore((s) => s.resetFilter);
  const fillInstantSubCategories = useFiltersStore(
    (s) => s.fillInstantSubCategories,
  );

  useEffect(() => {
    setFilters(props);
    if (category || pet || promotion) {
      resetFilter();
      if (category && typeof +category == 'number') {
        setCategory(Number(category));
        fillInstantSubCategories(
          props.subCategories
            .filter((s) => s.category === Number(category))
            .map((s) => s.id),
        );
      }
      if (pet && typeof +pet == 'number') {
        setPet(Number(pet));
      }
      if (promotion) {
        if (promotion === 'true') setPromotion(Boolean(promotion));
      }
    }
  }, [category, pet, promotion]);

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
