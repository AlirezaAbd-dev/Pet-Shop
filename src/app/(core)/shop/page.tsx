import { Metadata } from 'next';
import React from 'react';

import { axiosInstance } from '@/lib/constants/axios';
import { SubCategory } from '@/routes/admin/sub-categories/queries/admin-sub-categories.query';
import { Pet } from '@/routes/home';
import Shop from '@/routes/shop';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const metadata: Metadata = {
  title: 'uspetinc - Shop',
};

export type Brand = {
  id: number;
  name: string;
  logo: string;
};
export type Category = {
  id: number;
  name: string;
  image: string;
  is_top: boolean;
};

const page = async () => {
  const { brands, categories, pets, subCategories } = await getFilterData();

  return (
    <Shop
      brands={brands}
      categories={categories}
      pets={pets}
      subCategories={subCategories}
    />
  );
};

async function getFilterData() {
  const results = await Promise.allSettled([
    axiosInstance.get<Brand[]>(`/shop/api/v1/brands/`).then((res) => res.data),
    axiosInstance
      .get<Category[]>(`/shop/api/v1/categories/`)
      .then((res) => res.data),
    axiosInstance.get<Pet[]>(`/shop/api/v1/pets/`).then((res) => res.data),
    axiosInstance
      .get<SubCategory[]>(`/shop/api/v1/subcategories/`)
      .then((res) => res.data),
  ]);

  const rejected = results.filter((r) => r.status === 'rejected');

  if (rejected.length > 0) {
    throw new Error('Something went wrong');
  }

  const data = results.filter((s) => s.status === 'fulfilled') as [
    PromiseFulfilledResult<Brand[]>,
    PromiseFulfilledResult<Category[]>,
    PromiseFulfilledResult<Pet[]>,
    PromiseFulfilledResult<SubCategory[]>,
  ];

  return {
    brands: data[0].value,
    categories: data[1].value,
    pets: data[2].value,
    subCategories: data[3].value,
  };
}

export default page;
