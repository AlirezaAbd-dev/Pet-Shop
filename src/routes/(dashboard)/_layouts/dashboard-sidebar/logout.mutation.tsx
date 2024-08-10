import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';
import { useAuthStore } from '@/store/auth.store';

import { useDashboardModalsStore } from '../../_store/dashboard-modals.store';

const useLogout = () => {
  const axiosProtected = useAxiosProtected();

  const router = useRouter();

  const setIsModalOpen = useDashboardModalsStore((s) => s.setIsLogoutModalOpen);
  const setAccessToken = useAuthStore((s) => s.setAccessToken);
  const setProfile = useAuthStore((s) => s.setProfile);

  const mutation = useMutation({
    mutationKey: [queryKeys.LOGOUT],
    mutationFn: () =>
      axiosProtected.post('/accounts/auth/logout/', {
        refresh: localStorage.getItem('refresh-token'),
      }),
    async onSuccess() {
      setAccessToken(undefined);
      localStorage.removeItem('refresh-token');
      queryClient.removeQueries({ queryKey: [queryKeys.PROFILE] });
      setProfile(undefined);
      setIsModalOpen(false);
      router.refresh();
    },
  });

  return mutation;
};

export default useLogout;
