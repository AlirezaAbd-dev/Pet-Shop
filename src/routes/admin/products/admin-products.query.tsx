import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../_constants/admin-query-keys.constants';

type AdminProductsResponse = {
  count: number;
  next: null;
  previous: null;
  results: AdminProduct[];
};

const useAdminProductsQuery = () => {
  const axiosProtected = useAxiosProtected();

  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');

  const query = useQuery({
    queryKey: [adminQueryKeys.PRODUCTS, page, search],
    queryFn: () =>
      axiosProtected
        .get<AdminProductsResponse>(
          `/uspetadmin/products/filtered/?page=${page + 1}${search ? `&name=${search}` : ''}`,
        )
        .then((res) => res.data),
  });

  return { query, page, search, setPage, setSearch };
};

export default useAdminProductsQuery;

export interface AdminProduct {
  id: number;
  name: string;
  description: string;
  brand: number;
  price: number;
  weight: number;
  inventory: number;
  features: string;
  pets: number[];
  categories: number[];
  is_best_selling: boolean;
  is_top: boolean;
  is_on_sale: boolean;
  discount: number;
  status: boolean;
  created_date: string;
  updated_date: string;
  published_date: string;
  images: Image[];
}

export interface Image {
  id: number;
  product: number;
  image: string;
  alt_text: string;
}
