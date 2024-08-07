import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Category } from '@/app/(core)/shop/page';
import { axiosInstance } from '@/lib/constants/axios';
import queryKeys from '@/lib/constants/query-keys.constants';

const useCategoriesQuery = () => {
  const query = useQuery({
    queryKey: [queryKeys.CATEGORIES],
    queryFn: () =>
      axiosInstance
        .get<Category[]>('/shop/api/v1/categories/')
        .then((res) => res.data),
  });

  return query;
};

export default useCategoriesQuery;
