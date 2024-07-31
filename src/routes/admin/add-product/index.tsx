import React from 'react';

import { Button } from '@/components/ui/button';

import AddProductBreadcrumb from './components/add-product-breadcrumb.component';
import AddProductForm from './components/add-product.form';

const AdminAddProduct = () => {
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
        <AddProductForm />
      </section>
    </main>
  );
};

export default AdminAddProduct;
