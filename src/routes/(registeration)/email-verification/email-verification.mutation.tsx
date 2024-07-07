import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { axiosInstance } from '@/lib/constants/axios';

import { registerQueryKeys } from '../_constants/query-keys.constants';

const useEmailVerificationMutation = () => {
  const router = useRouter();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<any>,
    { email: string; code: string }
  >({
    mutationKey: [registerQueryKeys.EMAIL_VERIFICATION],
    mutationFn: (data) =>
      axiosInstance.post('/accounts/auth/registration/verify-email/', data),
    onSuccess() {
      router.push('/login');
    },
    onError(error) {
      toast.error(error.response?.data.message);
    },
  });

  return mutation;
};

export default useEmailVerificationMutation;
