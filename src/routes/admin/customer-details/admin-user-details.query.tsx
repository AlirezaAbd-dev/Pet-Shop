import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { ProfileType } from '@/hooks/react-query/queries/profile.query';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import { OrderItem, Orders } from '@/routes/(dashboard)/orders/orders.types';
import { AddressResponse } from '@/routes/checkout/queries/addresses.query';

import { adminQueryKeys } from '../_constants/admin-query-keys.constants';

type AdminUserDetailsResponse = {
  profile: ProfileType;
  addresses: AddressResponse[];
  orders: Orders[];
};

const useAdminUserDetailQuery = () => {
  const params = useParams<{ customerId: string }>();

  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.USER_DETAILS, params?.customerId],
    queryFn: () =>
      axiosProtected
        .get<AdminUserDetailsResponse>(
          `/uspetadmin/user/full-data/${params?.customerId}/`,
        )
        .then((res) => res.data),
    enabled: !!params?.customerId,
  });

  return query;
};

export default useAdminUserDetailQuery;
