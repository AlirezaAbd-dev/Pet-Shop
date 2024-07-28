import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

import { axiosInstance } from '@/lib/constants/axios';
import { useAuthStore } from '@/store/auth.store';

import { registerQueryKeys } from '../_constants/query-keys.constants';

const useLoginMutation = ({ isPanel = false }: { isPanel?: boolean }) => {
  const router = useRouter();

  const setAccessToken = useAuthStore((s) => s.setAccessToken);

  const mutation = useMutation<
    AxiosResponse<{ refresh: string; access: string; role: string }>,
    AxiosError<any>,
    { email?: string; username?: string; password: string }
  >({
    mutationKey: [registerQueryKeys.LOGIN],
    mutationFn: (data) => axiosInstance.post('/accounts/auth/login/', data),
    onSuccess(data) {
      setAccessToken(data.data.access);
      localStorage.setItem('refresh-token', data.data.refresh);
      if (!isPanel) {
        router.push('/');
      } else {
        if (data.data.role === 'admin') router.push('/panel/admin/dashboard');
        else {
          toast.error('Unauthorized');
        }
      }
    },
    onError(error) {
      if (error.response?.data.message) {
        toast.error(error.response?.data.message);
      }
    },
  });

  return mutation;
};

export default useLoginMutation;
