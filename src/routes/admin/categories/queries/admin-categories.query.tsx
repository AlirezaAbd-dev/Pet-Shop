import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Category } from '@/app/(core)/shop/page';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useAdminCategoriesQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.CATEGORIES],
    queryFn: () =>
      axiosProtected
        .get<Category[]>('/uspetadmin/category/')
        .then((res) => res.data),
  });

  return query;
};

export default useAdminCategoriesQuery;
