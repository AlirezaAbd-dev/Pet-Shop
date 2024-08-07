import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';
import { axiosInstance } from '@/lib/constants/axios';
import queryKeys from '@/lib/constants/query-keys.constants';

const useSearchQuery = () => {
  const [search, setSearch] = useState('');

  const queryParams = `?${!!search ? `&search=${search}` : ''}`;

  const query = useQuery({
    queryKey: [queryKeys.SEARCH, queryParams],
    queryFn: () =>
      axiosInstance
        .get<Product[]>(`/shop/api/v1/products/filter/${queryParams}`)
        .then((res) => res.data),
    enabled: search.length >= 3,
  });

  return { query, search, setSearch };
};

export default useSearchQuery;
