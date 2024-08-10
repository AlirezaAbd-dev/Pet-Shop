import { useQuery } from '@tanstack/react-query';
import React from 'react';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

import { adminQueryKeys } from '../_constants/admin-query-keys.constants';

const useAdminProductDetails = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.EDIT_PRODUCT],
    queryFn: () => axiosProtected.get(''),
  });
};

export default useAdminProductDetails;
