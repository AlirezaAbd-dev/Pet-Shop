'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/loading-spinner';

import useAdminCategoriesQuery from '../categories/queries/admin-categories.query';
import useAdminSubCategoriesQuery from '../sub-categories/queries/admin-sub-categories.query';
import AddProductBreadcrumb from './components/add-product-breadcrumb.component';
import AddProductForm from './components/add-product.form';
import useAdminBrandsQuery from './queries/admin-brands.query';
import useAdminPetsQuery from './queries/admin-pets.query';

const AdminAddProduct = () => {
  const { data: categories, isPending: isCategoriesPending } =
    useAdminCategoriesQuery();
  const { data: brands, isPending: isBrandsPending } = useAdminBrandsQuery();
  const { data: pets, isPending: isPetsPending } = useAdminPetsQuery();
  const { data: subCategories, isPending: isSubCategoriesPending } =
    useAdminSubCategoriesQuery();

  if (
    isCategoriesPending ||
    isBrandsPending ||
    isPetsPending ||
    isSubCategoriesPending
  )
    return <LoadingSpinner className="mt-20" />;

  if (categories && brands && pets && subCategories)
    return (
      <main className="mt-6">
        <AddProductBreadcrumb />

        <section className="mt-16 bg-white border border-nature-800 rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl">Add product</p>
          </div>
          <AddProductForm
            brands={brands}
            categories={categories}
            pets={pets}
            subCategories={subCategories}
          />
        </section>
      </main>
    );
};

export default AdminAddProduct;
