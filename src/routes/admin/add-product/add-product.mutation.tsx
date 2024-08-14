import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../_constants/admin-query-keys.constants';

const useAddProductMutation = () => {
  const axiosProtected = useAxiosProtected();
  const router = useRouter();

  const mutation = useMutation<AxiosResponse, AxiosError<any>, FormData>({
    mutationKey: [adminQueryKeys.ADD_PRODUCT],
    mutationFn: (data) =>
      axiosProtected.post('/uspetadmin/products/create/', data),
    onSuccess() {
      toast.success('Product successfully created.');
      router.push('/panel/admin/products');
    },
    onError(error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    },
  });

  return mutation;
};

export default useAddProductMutation;
