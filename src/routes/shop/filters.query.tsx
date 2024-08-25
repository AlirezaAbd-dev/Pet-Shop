import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';
import { axiosInstance } from '@/lib/constants/axios';
import queryKeys from '@/lib/constants/query-keys.constants';

import { useFiltersStore } from './store/filters.store';

const useFiltersQuery = () => {
  const search = useFiltersStore((s) => s.search);
  const category = useFiltersStore((s) => s.category);
  const subCategory = useFiltersStore((s) => s.subCategory);
  const pet = useFiltersStore((s) => s.pet);
  const brand = useFiltersStore((s) => s.brand);
  const available = useFiltersStore((s) => s.available);
  const discounted = useFiltersStore((s) => s.discounted);
  const promotion = useFiltersStore((s) => s.promotion);
  const price = useFiltersStore((s) => s.price);
  const sortBy = useFiltersStore((s) => s.sortBy);

  const queryParams = `?price_min=${price.min}&price_max=${price.max}${sortBy ? `&ordering=${sortBy}` : ''}${!!search ? `&search=${search}` : ''}${available ? `&available=${available}` : ''}${discounted ? `&discount=${discounted}` : ''}${promotion ? `&promotions=${promotion}` : ''}${category.length > 0 ? `&category=${category.join(',')}` : ''}${subCategory.length > 0 ? `&subcategory=${subCategory.join(',')}` : ''}${pet.length > 0 ? `&pet=${pet.join(',')}` : ''}${brand.length > 0 ? `&brand=${brand.join(',')}` : ''}`;

  const query = useQuery({
    queryKey: [queryKeys.FILTERS, queryParams],
    queryFn: () =>
      axiosInstance
        .get<Product[]>(`/shop/api/v1/products/filter/${queryParams}`)
        .then((res) => res.data),
  });

  return query;
};

export default useFiltersQuery;
