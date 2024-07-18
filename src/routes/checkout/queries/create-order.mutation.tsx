import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

const useCreateOrderMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<any>,
    { order_note?: string; address_id: number }
  >({
    mutationKey: [queryKeys.CREATE_ORDER],
    mutationFn: (data) =>
      axiosProtected.post('/shop/api/v1/order/create/', data),
  });

  return mutation;
};

export default useCreateOrderMutation;
