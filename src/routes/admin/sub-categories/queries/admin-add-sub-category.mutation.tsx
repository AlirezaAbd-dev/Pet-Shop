import { useMutation } from '@tanstack/react-query';
import React from 'react';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useAdminAddSubCategoruMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation({
    mutationKey: [adminQueryKeys.ADD_SUB_CATEGORY],
    mutationFn: (data: { category: number; name: string }) =>
      axiosProtected.post('/uspetadmin/subcategory/', data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [adminQueryKeys.SUB_CATEGORIES],
      });
    },
  });

  return mutation;
};

export default useAdminAddSubCategoruMutation;
