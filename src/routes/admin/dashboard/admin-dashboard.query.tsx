import { useQuery } from '@tanstack/react-query';

import { Product } from '@/app/(core)/product/[productId]/page';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import { OrderStatus } from '@/routes/(dashboard)/orders/constants/orders.constants';
import { OrderItem, Orders } from '@/routes/(dashboard)/orders/orders.types';
import { AddressResponse } from '@/routes/checkout/queries/addresses.query';

import { adminQueryKeys } from '../_constants/admin-query-keys.constants';

export interface DashboardData {
  order_distribution_by_product: TimeBaseChartData;
  order_distribution_by_category: TimeBaseChartData;
  order_distribution_by_pet_type: TimeBaseChartData;
  delivered_orders_by_date: TimeBaseChartData;
  pending_orders_by_date: TimeBaseChartData;
  user_date_joined_by_date: TimeBaseChartData;
  products: Product[];
  orders: Orders[];
  orders_summary: OrdersSummary[];
  orders_by_date: any[];
}

export interface TimeBaseChartData {
  labels: string[];
  data: number[];
}

export interface Order {
  id: number;
  user: number;
  user_full_name: UserFullName | null;
  created_at: string;
  updated_at: string;
  status: OrderStatus;
  total_price: string;
  order_note: string;
  order_address: AddressResponse | null;
  order_items: OrderItem[];
  receipt: null | string;
}

export enum UserFullName {
  Ali = 'ali',
  AlirezaKalantari = 'alireza kalantari',
}

export interface OrdersSummary {
  status: OrderStatus;
  count: number;
  total_sum: number;
}

const useAdminDashboardQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.DASHBOARD],
    queryFn: () =>
      axiosProtected
        .get<DashboardData>('/uspetadmin/admin-panel-data/')
        .then((res) => res.data),
  });

  return query;
};

export default useAdminDashboardQuery;
