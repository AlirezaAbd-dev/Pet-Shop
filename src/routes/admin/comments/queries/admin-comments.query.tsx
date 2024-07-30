import { useQuery } from '@tanstack/react-query';

import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';

export type CommentStatus = 'pending' | 'accepted' | 'decline';

export type AdminComment = {
  id: number;
  product: number;
  product_name: string;
  rating: number;
  comment: string;
  created_date: string;
  reviewer: string;
  status: CommentStatus;
  response?: string;
  user_email: string;
  user_phone_number: string;
};

const useAdminCommentsQuery = () => {
  const axiosProtected = useAxiosProtected();

  const query = useQuery({
    queryKey: [adminQueryKeys.COMMENTS],
    queryFn: () =>
      axiosProtected
        .get<AdminComment[]>('/uspetadmin/adminReviews/')
        .then((res) => res.data),
  });

  return query;
};

export default useAdminCommentsQuery;
