import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

const useEditAddressMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<any>,
    {
      id?: number;
      country: string;
      county: string;
      city: string;
      street: string;
      post_code: string;
      phone_number: string;
    }
  >({
    mutationKey: [queryKeys.EDIT_ADDRESS],
    mutationFn: (data) =>
      axiosProtected[data.id ? 'put' : 'post'](
        `/accounts/users/addresses/${data.id ? data.id + '/' : ''}`,
        {
          country: data.country,
          county: data.county,
          city: data.city,
          phone_number: data.phone_number,
          post_code: data.post_code,
          street: data.street,
        },
      ),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.ADDRESSES] });
    },
  });

  return mutation;
};

export default useEditAddressMutation;
