import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

const useSaveProductsQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [queryKeys.SAVED_PRODUCTS],
    queryFn: () =>
      axiosProtected
        .get<{ id: number; products: Product[] }>('/shop/api/v1/wishlists/')
        .then((res) => res.data),
  });

  return query;
};

export default useSaveProductsQuery;
