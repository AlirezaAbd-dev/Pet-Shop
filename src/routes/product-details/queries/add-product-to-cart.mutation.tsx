import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

const useAddProductToCartMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation<
    AxiosResponse<any>,
    AxiosError<any>,
    { product_id: number; quantity: number }
  >({
    mutationKey: [queryKeys.ADD_PRODUCT_TO_CART],
    mutationFn: (data) =>
      axiosProtected[data.quantity > 0 ? 'post' : 'delete'](
        `/shop/api/v1/cart/${data.quantity === 0 ? `delete/${data.product_id}/` : ''}`,
        {
          products: [
            {
              product_id: data.product_id,
              ...(data.quantity > 0 ? { quantity: data.quantity } : {}),
            },
          ],
        },
      ),
  });

  return mutation;
};

export default useAddProductToCartMutation;
