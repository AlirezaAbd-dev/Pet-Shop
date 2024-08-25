import { useQuery } from '@tanstack/react-query';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

export type SubCategory = {
  id: number;
  name: string;
  category: number;
  categoryName: string;
};

const useAdminSubCategoriesQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.SUB_CATEGORIES],
    queryFn: () =>
      axiosProtected
        .get<SubCategory[]>('/uspetadmin/subcategory/')
        .then((res) => res.data),
  });

  return query;
};

export default useAdminSubCategoriesQuery;
