import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

import { axiosInstance } from '@/lib/constants/axios';
import queryKeys from '@/lib/constants/query-keys.constants';

const useContactUsMutation = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: [queryKeys.CONTACT_US],
    mutationFn: (data: { full_name: string; email: string; message: string }) =>
      axiosInstance.post('/contactus/', data),
    onSuccess() {
      toast.success('Thank you for contacting us :)');
      router.refresh();
    },
    onError() {
      toast.error('Failed! please try again later');
    },
  });

  return mutation;
};

export default useContactUsMutation;
