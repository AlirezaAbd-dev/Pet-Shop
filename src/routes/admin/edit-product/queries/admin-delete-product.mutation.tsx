import { useMutation } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';
import { useAdminEditProductStore } from '../admin-edit-product.store';

const useAdminDeleteProductMutation = () => {
  const params = useParams<{ productId: string }>();
  const router = useRouter();
  const axiosProtected = useAxiosProtected();

  const setIsModalOpen = useAdminEditProductStore(
    (s) => s.setIsDeleteProductOpen,
  );

  const mutation = useMutation({
    mutationKey: [adminQueryKeys.DELETE_PRODUCT],
    mutationFn: () =>
      axiosProtected.delete(`/uspetadmin/product/${params?.productId}/`),
    onSuccess() {
      setIsModalOpen(false);
      router.replace('/panel/admin/products');
    },
  });

  return mutation;
};

export default useAdminDeleteProductMutation;
