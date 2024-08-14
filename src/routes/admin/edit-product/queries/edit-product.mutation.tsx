import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useEditProductMutation = () => {
  const params = useParams<{ productId: string }>();

  const axiosProtected = useAxiosProtected();
  const router = useRouter();

  const mutation = useMutation<AxiosResponse, AxiosError<any>, FormData>({
    mutationKey: [adminQueryKeys.EDIT_PRODUCT],
    mutationFn: (data) =>
      axiosProtected.put(
        `/uspetadmin/products/edit/${params?.productId}/`,
        data,
      ),
    onSuccess() {
      toast.success('Product successfully edited.');
      router.push('/panel/admin/products');
    },
    onError(error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    },
  });

  return mutation;
};

export default useEditProductMutation;
