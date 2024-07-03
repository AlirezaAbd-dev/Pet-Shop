'use client';

import React, { useState } from 'react';

import Icon from '@/components/icon';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';

import SvgArrow from '@icons/arrow.1.svg';

const ShopHover = () => {
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
          <div className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200">
            <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
              <img src="/static/categories/toys.png" />
            </span>
            <p className="font-semibold text-sm">Toys</p>
          </div>
          <div className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200">
            <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
              <img src="/static/categories/resting-place.png" />
            </span>
            <p className="font-semibold text-sm">Resting places</p>
          </div>
          <div className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200">
            <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
              <img src="/static/categories/at-home.png" />
            </span>
            <p className="font-semibold text-sm">At home</p>
          </div>
          <div className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200">
            <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
              <img src="/static/categories/food.png" />
            </span>
            <p className="font-semibold text-sm">Food</p>
          </div>
          <div className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200">
            <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
              <img src="/static/categories/training-and-sport.png" />
            </span>
            <p className="font-semibold text-sm">Training and sport</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default ShopHover;
