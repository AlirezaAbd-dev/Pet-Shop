import { useMutation } from '@tanstack/react-query';
import React from 'react';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';
import { useDashboardModalsStore } from '@/routes/(dashboard)/_store/dashboard-modals.store';

const useDeleteSavedProduct = () => {
  const axiosProtected = useAxiosProtected();
  const setIsModalOpen = useDashboardModalsStore(
    (s) => s.setIsDeleteSavedProductModalOpen,
  );

  const mutation = useMutation({
    mutationKey: [queryKeys.DELETE_SAVED_PRODUCT],
    mutationFn: (data: { id: string }) =>
      axiosProtected.delete(`/shop/api/v1/wishlists/delete/${data.id}/`),
    onSuccess() {
      setIsModalOpen(undefined);
      queryClient.invalidateQueries({ queryKey: [queryKeys.SAVED_PRODUCTS] });
    },
  });

  return mutation;
};

export default useDeleteSavedProduct;
