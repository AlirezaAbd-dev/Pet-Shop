import { useQuery } from '@tanstack/react-query';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { dashboardQueryKeys } from '../_constants/dashboard-query-keys';
import { Orders } from './orders.types';

const useOrdersQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [dashboardQueryKeys.ORDERS],
    queryFn: () =>
      axiosProtected
        .get<Orders[]>('/accounts/users/orders/')
        .then((res) => res.data),
  });

  return query;
};

export default useOrdersQuery;
