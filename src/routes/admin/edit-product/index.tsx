'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/loading-spinner';
import useSingleProductQuery from '@/routes/product-details/queries/single-product.query';

import useAdminBrandsQuery from '../add-product/queries/admin-brands.query';
import useAdminPetsQuery from '../add-product/queries/admin-pets.query';
import useAdminCategoriesQuery from '../categories/queries/admin-categories.query';
import useAdminSubCategoriesQuery from '../sub-categories/queries/admin-sub-categories.query';
import { useAdminEditProductStore } from './admin-edit-product.store';
import DeleteProductModal from './components/delete-product.modal';
import EditProductBreadcrumb from './components/edit-product-breadcrumb.component';
import EditProductForm from './components/edit-product.form';

const AdminEditProduct = () => {
  const { data: categories, isPending: isCategoriesPending } =
    useAdminCategoriesQuery();
  const { data: brands, isPending: isBrandsPending } = useAdminBrandsQuery();
  const { data: pets, isPending: isPetsPending } = useAdminPetsQuery();
  const { data: product, isPending: isProductPending } =
    useSingleProductQuery();
  const { data: subCategories, isPending: isSubCategoriesPending } =
    useAdminSubCategoriesQuery();

  const setIsModalOpen = useAdminEditProductStore(
    (s) => s.setIsDeleteProductOpen,
  );

  if (
    isCategoriesPending ||
    isBrandsPending ||
    isPetsPending ||
    isProductPending ||
    isSubCategoriesPending
  )
    return <LoadingSpinner className="mt-20" />;

  if (categories && brands && pets && product && subCategories)
    return (
      <>
        <DeleteProductModal />
        <main className="mt-6">
          <EditProductBreadcrumb />

          <section className="mt-16 bg-white border border-nature-800 rounded-2xl p-6">
            <div className="flex justify-between items-center">
              <p className="font-bold text-xl">Edit product</p>
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className="w-[180px] md:text-base rounded-xl"
              >
                Remove product
              </Button>
            </div>
            <EditProductForm
              brands={brands}
              categories={categories}
              pets={pets}
              product={product}
              subCategories={subCategories}
            />
          </section>
        </main>
      </>
    );
};

export default AdminEditProduct;
