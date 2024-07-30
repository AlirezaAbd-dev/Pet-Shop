import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { queryClient } from '@/app/providers';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

import { adminQueryKeys } from '../../_constants/admin-query-keys.constants';
import { CommentStatus } from './admin-comments.query';

const useAdminCommentStatusMutation = () => {
  const axiosProtected = useAxiosProtected();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError,
    { id: number; status?: CommentStatus; response?: string }
  >({
    mutationKey: [adminQueryKeys.EDIT_COMMENT_STATUS],
    mutationFn: (data) =>
      axiosProtected.patch(`/uspetadmin/adminReviews/${data.id}/`, {
        status: data.status,
        response: data.response,
      }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [adminQueryKeys.COMMENTS] });
    },
  });

  return mutation;
};

export default useAdminCommentStatusMutation;
