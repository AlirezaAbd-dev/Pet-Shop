import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useParams } from 'next/navigation';
import React from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';
import { axiosInstance } from '@/lib/constants/axios';
import queryKeys from '@/lib/constants/query-keys.constants';

const useSingleProductQuery = (initialData?: Product) => {
  const params = useParams<{ productId: string }>();

  const query = useQuery<Product, AxiosError>({
    queryKey: [queryKeys.SINGLE_PRODUCT, params?.productId],
    queryFn: () =>
      axiosInstance
        .get(`/shop/api/v1/products/${params?.productId}`)
        .then((res) => res.data),
    enabled: !!params?.productId,
    initialData,
  });

  return query;
};

export default useSingleProductQuery;
