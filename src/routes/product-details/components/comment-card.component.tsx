import React from 'react';

import SvgUserProfile24 from '@/assets/svg/user-profile-24.svg';
import SvgUserProfile40 from '@/assets/svg/user-profile-40.svg';

import { Comment } from '../queries/comments.query';

type Props = Comment;

const CommentCard = (props: Props) => {
  return (
    <li className="border-b border-secondary-100 pb-6 md:pb-10">
      <div className="flex gap-3 md:gap-5">
        <span className="w-10 h-10 md:w-[79px] md:h-[79px] flex justify-center items-center rounded-full bg-nature-800">
          <SvgUserProfile24 className="md:hidden" />
          <SvgUserProfile40 className="hidden md:block" />
        </span>
        <div className="flex flex-col justify-center gap-1 md:gap-2">
          <p className="font-bold text-sm md:text-xl">{props.reviewer}</p>
          <p className="text-xs md:text-base">Website user</p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-7 md:pl-[99px] whitespace-pre-line">
        {props.comment}
      </p>
      {props.response && (
        <>
          <div className="flex gap-3 md:gap-5 md:pl-[331px] md:mt-8 mt-6">
            <img
              src="/static/admin-profile.png"
              alt="admin-profile"
              className="w-10 h-10 md:w-[79px] md:h-[79px]"
            />
            <div className="flex flex-col justify-center gap-1 md:gap-2">
              <p className="font-bold text-sm md:text-xl">petshop</p>
              <p className="text-xs md:text-base">Website admin</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 md:pl-[430px] whitespace-pre-line">
            {props.response}
          </p>
        </>
      )}
    </li>
  );
};

export default CommentCard;
