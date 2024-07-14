import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useParams } from 'next/navigation';

import { Product } from '@/app/(core)/product/[productId]/page';
import { axiosInstance } from '@/lib/constants/axios';
import queryKeys from '@/lib/constants/query-keys.constants';

const useRelatedProductsQuery = () => {
  const params = useParams<{ productId?: string }>();

  const query = useQuery<Product[]>({
    queryKey: [queryKeys.RELATED_PRODUCTS, params?.productId],
    queryFn: () =>
      axiosInstance
        .get(`/shop/api/v1/products/${params?.productId}/related/`)
        .then((res) => res.data),
    enabled: !!params?.productId,
  });

  return query;
};

export default useRelatedProductsQuery;
