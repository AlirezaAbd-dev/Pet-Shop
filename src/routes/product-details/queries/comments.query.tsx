import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';

import { axiosInstance } from '@/lib/constants/axios';
import queryKeys from '@/lib/constants/query-keys.constants';

export interface Comment {
  id: number;
  product: number;
  product_name: string;
  rating: number;
  comment: string;
  created_date: string;
  reviewer: string;
  status: string;
  response: string | null;
}

const useCommentsQuery = () => {
  const params = useParams<{ productId: string }>();

  const query = useQuery({
    queryKey: [queryKeys.COMMENTS, params?.productId],
    queryFn: () =>
      axiosInstance
        .get<
          Comment[]
        >(`/shop/api/v1/products/${params?.productId}/reviews/accepted/`)
        .then((res) => res.data),
    enabled: !!params?.productId,
  });

  return query;
};

export default useCommentsQuery;
