import { useMutation } from '@tanstack/react-query';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../_constants/admin-query-keys.constants';

const useAddProductMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation({
    mutationKey: [adminQueryKeys.ADD_PRODUCT],
    mutationFn: (data: FormData) =>
      axiosProtected.post('/uspetadmin/products/create/', data),
  });

  return mutation;
};

export default useAddProductMutation;
