import { useQuery } from '@tanstack/react-query';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import { Pet } from '@/routes/home';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useAdminPetsQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.PETS],
    queryFn: () =>
      axiosProtected.get<Pet[]>('/uspetadmin/pet/').then((res) => res.data),
  });

  return query;
};

export default useAdminPetsQuery;
