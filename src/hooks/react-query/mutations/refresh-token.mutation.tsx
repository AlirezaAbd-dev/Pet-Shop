import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { axiosInstance } from '@/lib/constants/axios';
import queryKeys from '@/lib/constants/query-keys.constants';

const useRefreshTokenMutation = () => {
  const mutation = useMutation<
    AxiosResponse<{ access: string }>,
    AxiosError<any>,
    { refresh?: string }
  >({
    mutationKey: [queryKeys.REFRESH_TOKEN],
    mutationFn: (data) =>
      axiosInstance.post('accounts/auth/token/refresh/', data),
    retry: 0,
  });

  return mutation;
};

export default useRefreshTokenMutation;
