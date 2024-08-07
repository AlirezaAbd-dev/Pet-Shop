import { useQuery } from '@tanstack/react-query';

import { Brand } from '@/app/(core)/shop/page';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useAdminBrandsQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.BRANDS],
    queryFn: () =>
      axiosProtected.get<Brand[]>('/uspetadmin/brand/').then((res) => res.data),
  });

  return query;
};

export default useAdminBrandsQuery;
