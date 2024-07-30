import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';
import { AdminOrderResponse } from '../../orders/admin-orders.query';

const useAdminOrderDetailsQuery = () => {
  const axiosProtected = useAxiosProtected();
  const params = useParams<{ orderId: string }>();

  const query = useQuery({
    queryKey: [adminQueryKeys.ORDER_DETAILS, params?.orderId],
    queryFn: () =>
      axiosProtected
        .get<AdminOrderResponse>(`/uspetadmin/orderFull/${params?.orderId}/`)
        .then((res) => res.data),
    enabled: !!params.orderId,
  });

  return query;
};
export default useAdminOrderDetailsQuery;
