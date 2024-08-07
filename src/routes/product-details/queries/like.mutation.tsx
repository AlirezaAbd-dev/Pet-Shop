import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

const useLikeMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError,
    { id: number; mode: 'like' | 'unlike' }
  >({
    mutationKey: [queryKeys.LIKE],
    mutationFn: (data) =>
      axiosProtected[data.mode === 'like' ? 'post' : 'delete'](
        `/shop/api/v1/wishlists/${data.mode === 'unlike' ? 'delete/' + data.id + '/' : ''}`,
        { products: [{ product_id: data.id }] },
      ),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.WHISHLISTS] });
    },
    // async onMutate(variables) {
    //   await queryClient.cancelQueries({ queryKey: [queryKeys.WHISHLISTS] });

    //   // queryClient.setQueryData(
    //   //   [queryKeys.WHISHLISTS],
    //   //   (wishlist: WishlistResponse) => {
    //   //     if (wishlist?.products) {
    //   //       if (variables.mode === 'like') {
    //   //         wishlist.products.push(variables.id);
    //   //       } else {
    //   //         const findIndex = wishlist.products.findIndex(
    //   //           (p) => p.id === variables.id,
    //   //         );
    //   //         if (findIndex !== -1) {
    //   //           wishlist.products.splice(findIndex, 1);
    //   //         }
    //   //       }
    //   //       return wishlist;
    //   //     }
    //   //   },
    //   // );
    // },
  });

  return mutation;
};

export default useLikeMutation;
