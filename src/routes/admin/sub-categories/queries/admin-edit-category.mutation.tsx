import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useAdminEditCategoruMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation({
    mutationKey: [adminQueryKeys.EDIT_SUB_CATEGORY],
    mutationFn: (data: {
      category: { name: string; category: number };
      id: number;
    }) =>
      axiosProtected.put(`/uspetadmin/subcategory/${data.id}/`, data.category),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [adminQueryKeys.SUB_CATEGORIES],
      });
    },
  });

  return mutation;
};

export default useAdminEditCategoruMutation;
