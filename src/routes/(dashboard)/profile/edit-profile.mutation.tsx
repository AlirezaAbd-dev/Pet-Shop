import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

import { dashboardQueryKeys } from '../_constants/dashboard-query-keys';

const useEditProfileMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation<AxiosResponse<any>, AxiosError<any>, FormData>({
    mutationKey: [dashboardQueryKeys.EDIT_PROFILE],
    mutationFn: (data) =>
      axiosProtected.patch('/accounts/users/profile/', data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.PROFILE] });
    },
  });

  return mutation;
};

export default useEditProfileMutation;
