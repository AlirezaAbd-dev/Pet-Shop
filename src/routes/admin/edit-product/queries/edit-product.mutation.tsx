import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useEditProductMutation = () => {
  const axiosProtected = useAxiosProtected();
  const router = useRouter();
  const mutation = useMutation({
    mutationKey: [adminQueryKeys.EDIT_PRODUCT],
    mutationFn: (data: FormData) =>
      axiosProtected.post('/uspetadmin/products/edit/', data),
    onSuccess() {
      toast.success('Product successfully edited.');
      router.push('panel/admin/products');
    },
  });

  return mutation;
};

export default useEditProductMutation;
