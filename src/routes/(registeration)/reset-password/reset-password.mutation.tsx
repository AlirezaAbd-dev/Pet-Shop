import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { axiosInstance } from '@/lib/constants/axios';

import { registerQueryKeys } from '../_constants/query-keys.constants';

const useResetPasswordMutation = () => {
  const router = useRouter();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<any>,
    { new_password: string; uid: string; token: string }
  >({
    mutationKey: [registerQueryKeys.RESET_PASSWORD],
    mutationFn: (data) =>
      axiosInstance.post('/accounts/auth/password/reset/confirm/', data),
    onSuccess() {
      toast.success('new password successfully replaced');
      router.replace('/login');
    },
    onError(error) {
      toast.error(error.response?.data.message);
    },
  });

  return mutation;
};

export default useResetPasswordMutation;
