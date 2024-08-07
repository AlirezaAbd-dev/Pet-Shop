'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/loading-spinner';

import useAdminCategoriesQuery from '../categories/queries/admin-categories.query';
import AddProductBreadcrumb from './components/add-product-breadcrumb.component';
import AddProductForm from './components/add-product.form';
import useAdminBrandsQuery from './queries/admin-brands.query';
import useAdminPetsQuery from './queries/admin-pets.query';

const AdminAddProduct = () => {
  const { data: categories, isPending: isCategoriesPending } =
    useAdminCategoriesQuery();
  const { data: brands, isPending: isBrandsPending } = useAdminBrandsQuery();
  const { data: pets, isPending: isPetsPending } = useAdminPetsQuery();

  if (isCategoriesPending || isBrandsPending || isPetsPending)
    return <LoadingSpinner className="mt-20" />;

  if (categories && brands && pets)
    return (
      <main className="mt-6">
        <AddProductBreadcrumb />

        <section className="mt-16 bg-white border border-nature-800 rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl">Add product</p>
            <Button className="w-[180px] md:text-base rounded-xl">
              Remove product
            </Button>
          </div>
          <AddProductForm brands={brands} categories={categories} pets={pets} />
        </section>
      </main>
    );
};

export default AdminAddProduct;
