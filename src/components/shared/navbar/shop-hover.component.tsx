'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { Category } from '@/app/(core)/shop/page';
import Icon from '@/components/icon';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';

import SvgArrow from '@icons/arrow.1.svg';

type Props = {
  categories?: Category[];
};

const ShopHover = (props: Props) => {
  const [isHoverOpen, setIsHoverOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          'absolute left-0 top-0 z-40 w-full h-full hidden bg-gradient-to-b from-[rgba(8,54,123,0)] to-[rgba(8,54,123,.25)]',
          isHoverOpen ? 'md:block mt-20' : '',
        )}
      ></div>
      <HoverCard
        openDelay={100}
        closeDelay={100}
        open={isHoverOpen}
        onOpenChange={setIsHoverOpen}
      >
        <HoverCardTrigger>
          <li className="flex items-center gap-1 cursor-pointer text-lg">
            Shop{' '}
            <Icon>
              <SvgArrow className="w-5 h-5 rotate-180" />
            </Icon>
          </li>
        </HoverCardTrigger>
        <HoverCardContent className="flex flex-col bg-white md:ml-10 md:mt-5 rounded-xl border-none w-[208px] p-3 overflow-hidden">
          {props.categories?.map((item) => (
            <Link
              key={item.id}
              href={`/shop?category=${item.id}`}
              className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200"
            >
              <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
                <img src={item.image} className="w-full" />
              </span>
              <p className="font-semibold text-sm">{item.name}</p>
            </Link>
          ))}
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default ShopHover;
