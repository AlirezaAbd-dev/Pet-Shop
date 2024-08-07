import React from 'react';

import SvgHeartRed20 from '@/assets/svg/heart-red-20.svg';
import SvgHeartRed28 from '@/assets/svg/heart-red-28.svg';
import Icon from '@/components/icon';
import useWishlistQuery from '@/hooks/react-query/queries/wishlist.query';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth.store';

import SvgHeartDesktop from '@icons/heart-desktop.svg';
import SvgHeartSmall from '@icons/heart-small.svg';

import useLikeMutation from '../../queries/like.mutation';

type LikeProps = {
  productId: number;
};

const Like = (props: LikeProps) => {
  const profile = useAuthStore((s) => s.profile);

  const { data: wishlist, isPending: isWishlistPending } = useWishlistQuery();

  const { mutate, isPending } = useLikeMutation();

  const findProduct = wishlist?.products.find((p) => p.id === props.productId);
  const isLiked = !isWishlistPending ? !!findProduct : undefined;

  return (
    <Icon
      onClick={() => {
        if (profile && !isPending) {
          mutate({ id: props.productId, mode: isLiked ? 'unlike' : 'like' });
        }
      }}
      className={cn(
        'p-1.5 md:p-[10px] bg-nature-700 rounded-lg cursor-pointer',
        isPending ? 'animate-ping' : '',
      )}
    >
      {!isLiked ? (
        <>
          <SvgHeartSmall className="md:hidden" />
          <SvgHeartDesktop className="hidden md:block" />
        </>
      ) : (
        <>
          <SvgHeartRed20 className="md:hidden" />
          <SvgHeartRed28 className="hidden md:block" />
        </>
      )}
    </Icon>
  );
};

export default Like;
