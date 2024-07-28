import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { ProfileType } from '@/hooks/react-query/queries/profile.query';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../_constants/admin-query-keys.constants';

const useAdminUserQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.USERS],
    queryFn: () =>
      axiosProtected
        .get<ProfileType[]>('/uspetadmin/userprofile/')
        .then((res) => res.data),
  });

  return query;
};

export default useAdminUserQuery;
