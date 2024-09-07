import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { error } from 'console';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';
import { useAuthStore } from '@/store/auth.store';

export type ProfileType = {
  id: number;
  profile_pic: string;
  phone_number: string;
  email: string;
  username: string;
  full_name: string;
  password: string;
  role: string;
};

const useProfileQuery = (action?: string) => {
  const router = useRouter();

  const setIsLoading = useAuthStore((s) => s.setIsLoading);
  const setProfile = useAuthStore((s) => s.setProfile);

  const axiosProtected = useAxiosProtected();

  const query = useQuery<AxiosResponse<ProfileType>, AxiosError<any>>({
    queryKey: [queryKeys.PROFILE],
    queryFn: () => axiosProtected.get('/accounts/users/profile/'),
    retry: 0,
  });

  useEffect(() => {
    if (!query.isPending && query.isSuccess) {
      setIsLoading(false);
      setProfile(query.data.data);
    } else if (!query.isPending && query.error) {
      if (
        action &&
        (query.error.response?.status === 401 ||
          query.error.response?.status === 400)
      ) {
        router.replace(action);
      }
      setIsLoading(false);
    }
  }, [query.isPending, query.data, query.isSuccess, query.error, action]);

  return query;
};

export default useProfileQuery;
