import React from 'react';

import { axiosInstance } from '@/lib/constants/axios';
import Shop from '@/routes/shop';

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
  const { brands, categories } = await getFilterData();

  return <Shop brands={brands} categories={categories} />;
};

async function getFilterData() {
  const results = await Promise.allSettled([
    axiosInstance.get<Brand[]>(`/shop/api/v1/brands/`).then((res) => res.data),
    axiosInstance
      .get<Category[]>(`/shop/api/v1/categories/`)
      .then((res) => res.data),
  ]);

  const rejected = results.filter((r) => r.status === 'rejected');

  if (rejected.length > 0) {
    throw new Error('Something went wrong');
  }

  const data = results.filter((s) => s.status === 'fulfilled') as [
    PromiseFulfilledResult<Brand[]>,
    PromiseFulfilledResult<Category[]>,
  ];

  return { brands: data[0].value, categories: data[1].value };
}

export default page;
