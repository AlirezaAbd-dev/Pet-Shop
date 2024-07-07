import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'sonner';

import { axiosInstance } from '@/lib/constants/axios';
import { registerQueryKeys } from '@/routes/(registeration)/_constants/query-keys.constants';

const useResendCode = () => {
  const mutation = useMutation<
    AxiosResponse,
    AxiosError<any>,
    { email: string }
  >({
    mutationKey: [registerQueryKeys.RESEND_CODE],
    mutationFn: (data) =>
      axiosInstance.post('/accounts/auth/registration/resend-email', data),
    onError(error) {
      toast.error(error.response?.data.message);
    },
  });

  return mutation;
};

export default useResendCode;
