import { useMutation } from '@tanstack/react-query';
import React from 'react';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useAdminDeleteSubCategoryMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation({
    mutationKey: [adminQueryKeys.DELETE_SUB_CATEGORIES],
    mutationFn: (data: { id: string }) =>
      axiosProtected.delete(`/uspetadmin/subcategory/${data.id}/`),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [adminQueryKeys.SUB_CATEGORIES],
      });
    },
  });

  return mutation;
};

export default useAdminDeleteSubCategoryMutation;
