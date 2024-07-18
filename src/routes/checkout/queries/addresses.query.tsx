import { useQuery } from '@tanstack/react-query';
import React from 'react';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';
import queryKeys from '@/lib/constants/query-keys.constants';

export type AddressResponse = {
  id: number;
  country: string;
  county: string;
  city: string;
  street: string;
  post_code: string;
  phone_number: string;
};

const useAdressesQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery<AddressResponse[]>({
    queryKey: [queryKeys.ADDRESSES],
    queryFn: () =>
      axiosProtected.get('/accounts/users/addresses/').then((res) => res.data),
  });

  return query;
};

export default useAdressesQuery;
