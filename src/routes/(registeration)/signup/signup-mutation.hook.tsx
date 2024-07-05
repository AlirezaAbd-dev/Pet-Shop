import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { toast } from 'sonner';

import { axiosInstance } from '@/lib/constants/axios';

import { registerQueryKeys } from '../_constants/query-keys.constants';
import { useRegisterStore } from '../_store/register.store';
import { SignupValidationType } from './signup.validation';

const useSignupMutation = () => {
  const setSignupEmail = useRegisterStore((s) => s.setSignupEmail);
  const setSignupPage = useRegisterStore((s) => s.setSignupPage);

  const mutation = useMutation<AxiosResponse, any, SignupValidationType>({
    mutationKey: [registerQueryKeys.SIGNUP],
    mutationFn: (data) =>
      axiosInstance.post('/accounts/auth/registration', {
        full_name: data.fullname,
        email: data.email,
        password1: data.password,
        password2: data.password,
      }),
    onSuccess: (_data, variables) => {
      setSignupPage('enter-code');
      setSignupEmail(variables.email);
    },
    onError() {
      toast.error('Oops! something went wrong!');
    },
  });

  return mutation;
};

export default useSignupMutation;
