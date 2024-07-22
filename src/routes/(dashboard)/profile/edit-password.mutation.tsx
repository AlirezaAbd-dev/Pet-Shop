import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';
import { toast } from 'sonner';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { dashboardQueryKeys } from '../_constants/dashboard-query-keys';
import { useDashboardModalsStore } from '../_store/dashboard-modals.store';

const useEditPasswordMutation = () => {
  const axiosProtected = useAxiosProtected();

  const setIsModalOpen = useDashboardModalsStore(
    (s) => s.setIsChangePasswordModalOpen,
  );

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<any>,
    { old_password: string; new_password: string }
  >({
    mutationKey: [dashboardQueryKeys.EDIT_PASSWORD],
    mutationFn: (data) =>
      axiosProtected.post('/accounts/auth/password/change/', data),
    onSuccess() {
      setIsModalOpen(false);
      toast.success('password successfully changed');
    },
    onError(error) {
      toast.error(error.response?.data?.message || 'Oops. somthing went wrong');
    },
  });

  return mutation;
};

export default useEditPasswordMutation;
