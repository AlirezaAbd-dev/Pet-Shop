import { useQuery } from '@tanstack/react-query';
import React from 'react';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import { OrderStatus } from '@/routes/(dashboard)/orders/constants/orders.constants';

import { adminQueryKeys } from '../_constants/admin-query-keys.constants';

export interface AdminOrderResponse {
  id: number;
  user_full_name: string | null;
  created_at: Date;
  updated_at: Date;
  status: OrderStatus;
  total_price: string;
  order_note: string;
  user: number;
  order_address: number | null;
}

const useAdminOrdersQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.ORDERS],
    queryFn: () =>
      axiosProtected
        .get<AdminOrderResponse[]>('/uspetadmin/order/')
        .then((res) => res.data),
  });

  return query;
};

export default useAdminOrdersQuery;
