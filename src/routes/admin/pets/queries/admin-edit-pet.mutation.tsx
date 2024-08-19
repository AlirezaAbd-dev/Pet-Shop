import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

const useAdminEditPetMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation({
    mutationKey: [adminQueryKeys.EDIT_PET],
    mutationFn: (data: { pet: FormData; id: number }) =>
      axiosProtected.put(`/uspetadmin/adminPet/${data.id}/`, data.pet),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [adminQueryKeys.PETS] });
    },
  });

  return mutation;
};

export default useAdminEditPetMutation;
