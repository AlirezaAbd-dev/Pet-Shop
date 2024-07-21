import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { dashboardQueryKeys } from '../_constants/dashboard-query-keys';
import { Orders } from '../orders/orders.types';

const useOrderDetailsQuery = () => {
  const axiosProtected = useAxiosProtected();

  const params = useParams<{ orderId?: string }>();

  const query = useQuery({
    queryKey: [dashboardQueryKeys.ORDER_DETAILS, params?.orderId],
    queryFn: () =>
      axiosProtected
        .get<Orders>(`/accounts/users/orders/${params?.orderId}/`)
        .then((res) => res.data),
    enabled: !!params?.orderId,
  });

  return query;
};

export default useOrderDetailsQuery;
