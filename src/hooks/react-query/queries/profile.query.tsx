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
  const setProfile = useAuthStore((s) => s.setProfile);

  const axiosProtected = useAxiosProtected();

  const query = useQuery<AxiosResponse<ProfileType>, AxiosError<any>>({
    queryKey: [queryKeys.PROFILE],
    queryFn: () => axiosProtected.get('accounts/users/profile/'),
    retry: 1,
  });

  useEffect(() => {
    if (!query.isPending && query.isSuccess) {
      setProfile(query.data.data);
    }
  }, [query]);

  return query;
};

export default useProfileQuery;
