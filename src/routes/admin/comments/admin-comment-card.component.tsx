import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import useAdminCommentStatusMutation from './queries/admin-comment-status.mutation';
import { CommentStatus } from './queries/admin-comments.query';

type AdminCommentCardProps = {
  id: number;
  productsName: string;
  phone: string;
  email: string;
  username: string;
  content: string;
  status: CommentStatus;
  response?: string;
};

const AdminCommentCard = (props: AdminCommentCardProps) => {
  const [responseValue, setResponseValue] = useState(props.response || '');

  const { mutate, isPending } = useAdminCommentStatusMutation();

  function onChangeStatus(status: CommentStatus) {
    mutate({ id: props.id, status });
  }

  function onAddResponse() {
    mutate({ id: props.id, response: responseValue });
  }

  return (
    <li className="w-full bg-white border border-nature-800 px-4 py-6 rounded-xl">
      <div className="flex justify-between">
        <p className="flex gap-3">
          Name product
          <span className="font-bold">{props.productsName}</span>
        </p>
        <p className="flex gap-3">
          Phone
          <span className="font-bold">{props.phone}</span>
        </p>
        <p className="flex gap-3">
          Email
          <span className="font-bold">{props.email}</span>
        </p>
        <p className="flex gap-3">
          Username
          <span className="font-bold">{props.username}</span>
        </p>
      </div>
      <div className="w-full border-t border-[#E0E0E0] mt-6"></div>
      <p className="mt-6">{props.content}</p>

      <div className="flex justify-end gap-4 mt-9">
        {props.status !== 'accepted' && (
          <Button
            isLoading={isPending}
            disabled={isPending}
            variant={isPending ? 'disabled' : 'confirm'}
            onClick={onChangeStatus.bind(null, 'accepted')}
            className="md:text-sm font-semibold h-11 w-[142px] rounded-lg"
          >
            Confirmation
          </Button>
        )}
        {props.status !== 'decline' && (
          <Button
            isLoading={isPending}
            disabled={isPending}
            variant={isPending ? 'disabled' : 'outline'}
            onClick={onChangeStatus.bind(null, 'decline')}
            className="md:text-sm font-semibold h-11 w-[103px] rounded-lg"
          >
            Remove
          </Button>
        )}
      </div>

      {props.status === 'accepted' && (
        <>
          <Textarea
            value={responseValue}
            onChange={(e) => {
              setResponseValue(e.target.value);
            }}
            className="mt-8 h-[136px]"
          />
          <Button
            isLoading={isPending}
            disabled={isPending}
            variant={isPending ? 'disabled' : 'confirm'}
            onClick={onAddResponse}
            className="mt-4 rounded-lg w-[142px] md:text-sm"
          >
            Confirmation
          </Button>
        </>
      )}

      {/* <div className="w-full border-t border-[#E0E0E0] mt-6"></div>
      <p className="mt-6 font-semibold">
        Response: <span className="font-normal">{props.response}</span>
      </p> */}
    </li>
  );
};

export default AdminCommentCard;
