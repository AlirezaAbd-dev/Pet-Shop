import { useMutation } from '@tanstack/react-query';
import React from 'react';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useAdminDeletePetMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation({
    mutationKey: [adminQueryKeys.DELETE_PET],
    mutationFn: (data: { id: string }) =>
      axiosProtected.delete(`/uspetadmin/adminPet/${data.id}/`),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [adminQueryKeys.PETS] });
    },
  });

  return mutation;
};

export default useAdminDeletePetMutation;