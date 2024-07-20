import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect } from 'react';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';
import { useAuthStore } from '@/store/auth.store';

export type ProfileType = {
  profile_pic: string;
  phone_number: string;
  email: string;
  username: string;
  full_name: string;
  password: string;
};

const useProfileQuery = () => {
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
      setIsLoading(false);
    }
  }, [query]);

  return query;
};

export default useProfileQuery;
