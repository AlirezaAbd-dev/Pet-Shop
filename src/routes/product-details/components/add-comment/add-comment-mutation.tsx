import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useParams } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

import { useProductDetailsStore } from '../../product-details.store';

const useAddCommentMutation = () => {
  const params = useParams<{ productId: string }>();
  const axiosProtected = useAxiosProtected();

  const setIsModalOpen = useProductDetailsStore((s) => s.setIsCommentModalOpen);

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<any>,
    { comment: string }
  >({
    mutationKey: [queryKeys.ADD_COMMENT],
    mutationFn: (data) =>
      axiosProtected.post('/shop/api/v1/reviews/', {
        comment: data.comment,
        rating: 0,
        product: params?.productId,
      }),
    onSuccess() {
      setIsModalOpen(false);
      toast.success('Your comment will be registered after admin approval');
    },
    onError(err) {
      toast.error(err.response?.data.message);
    },
  });

  return mutation;
};

export default useAddCommentMutation;
