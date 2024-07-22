import { useQuery } from '@tanstack/react-query';
import React from 'react';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { dashboardQueryKeys } from '../_constants/dashboard-query-keys';
import { OrderStatus } from '../orders/constants/orders.constants';
import { Orders } from '../orders/orders.types';

export type OrderSummaryType = { [k in OrderStatus]?: number };

type DashboardQueryType = {
  email: string;
  full_name: string;
  last_order: Orders;
  total_orders: number;
  orders_summary: OrderSummaryType;
};

const useDashboardQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [dashboardQueryKeys.DASHBOARD],
    queryFn: () =>
      axiosProtected
        .get<DashboardQueryType>('/accounts/users/dashboard/')
        .then((res) => res.data),
  });

  return query;
};

export default useDashboardQuery;
