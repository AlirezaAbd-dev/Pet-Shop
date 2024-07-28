import { useQuery } from '@tanstack/react-query';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../_constants/admin-query-keys.constants';

const useAdminCommentsQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.COMMENTS],
    queryFn: () =>
      axiosProtected.get('/uspetadmin/review/').then((res) => res.data),
  });

  return query;
};

export default useAdminCommentsQuery;
