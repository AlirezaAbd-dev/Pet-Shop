import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { axiosInstance } from '@/lib/constants/axios';
import { registerQueryKeys } from '@/routes/(registeration)/_constants/query-keys.constants';
import { useRegisterStore } from '@/routes/(registeration)/_store/register.store';

const useEmailVerificationMutation = () => {
  const router = useRouter();

  const setPage = useRegisterStore((s) => s.setSignupPage);

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<any>,
    { email: string; code: string }
  >({
    mutationKey: [registerQueryKeys.EMAIL_VERIFICATION],
    mutationFn: (data) =>
      axiosInstance.post('/accounts/auth/registration/verify-email/', data),
    onSuccess() {
      setPage('signup');
      router.push('/login');
    },
    onError(error) {
      toast.error(error.response?.data.message || 'Entered code is not valid');
    },
  });

  return mutation;
};

export default useEmailVerificationMutation;
