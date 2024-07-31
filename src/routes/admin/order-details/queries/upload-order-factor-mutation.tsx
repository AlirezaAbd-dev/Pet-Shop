import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useUploadOrderFactorMutation = () => {
  const params = useParams<{ orderId: string }>();

  const axiosProtected = useAxiosProtected();

  const mutation = useMutation({
    mutationKey: [adminQueryKeys.UPLOAD_FACTOR],
    mutationFn: (data: FormData) =>
      axiosProtected.put(
        `/accounts/users/orders/update-receipt/${params?.orderId}/`,
        data,
      ),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [adminQueryKeys.ORDER_DETAILS, params?.orderId],
      });
    },
  });

  return mutation;
};

export default useUploadOrderFactorMutation;
