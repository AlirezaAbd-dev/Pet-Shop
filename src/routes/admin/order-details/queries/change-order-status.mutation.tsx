import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useChangeOrderStatusMutation = () => {
  const params = useParams<{ orderId: string }>();

  const axiosProtected = useAxiosProtected();

  const mutation = useMutation({
    mutationKey: [adminQueryKeys],
    mutationFn: (data: string) =>
      axiosProtected.patch(`/uspetadmin/order/${params?.orderId}/`, {
        status: data,
      }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [adminQueryKeys.ORDER_DETAILS, params?.orderId],
      });
    },
  });

  return mutation;
};

export default useChangeOrderStatusMutation;
