import { useMutation } from '@tanstack/react-query';
import React from 'react';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useAdminAddPetMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation({
    mutationKey: [adminQueryKeys.ADD_PET],
    mutationFn: (data: FormData) =>
      axiosProtected.post('/uspetadmin/adminPet/', data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [adminQueryKeys.PETS] });
    },
  });

  return mutation;
};

export default useAdminAddPetMutation;
