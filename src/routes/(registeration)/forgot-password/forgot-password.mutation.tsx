import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { axiosInstance } from '@/lib/constants/axios';

import { registerQueryKeys } from '../_constants/query-keys.constants';

const useForgotPasswordMutation = () => {
  const router = useRouter();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<any>,
    { email: string }
  >({
    mutationKey: [registerQueryKeys.FORGOT_PASSWORD],
    mutationFn: (data) =>
      axiosInstance.post('/accounts/auth/password/reset/', data),
    onSuccess() {
      router.push('/forgot-password/sent/');
    },
    onError(error) {
      toast.error(error.response?.data.message);
    },
  });

  return mutation;
};

export default useForgotPasswordMutation;
