import Link from 'next/link';
import React from 'react';

import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import SvgShoppingCardDesktop from '@icons/shopping-card-desktop.svg';
import SvgShoppingCard from '@icons/shopping-card.svg';

import NavbarProductCard from './navbar-product-card.component';

const CartHover = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Icon className="flex justify-center items-center w-8 md:w-14 h-8 md:h-14 cursor-pointer bg-primary-500 rounded-lg md:rounded-2xl text-primary-500">
          <SvgShoppingCard className="md:hidden w-6 h-6" />
          <SvgShoppingCardDesktop className="hidden md:block w-8 h-8" />
        </Icon>
      </HoverCardTrigger>

      <HoverCardContent className="flex flex-col bg-white md:mr-20 md:mt-7 md:rounded-2xl border-none w-full md:w-[483px] p-0 overflow-hidden">
        <ul className="w-full flex flex-col md:px-4 px-5 md:pt-4 pt-5 gap-5 md:gap-6">
          <NavbarProductCard />
          <NavbarProductCard />
        </ul>
        <div className="flex justify-between mt-4 md:mt-6 text-sm md:text-base md:px-4 px-5">
          <p>Discount:</p>
          <p className="text-error-500">$ 17.12 (25%)</p>
        </div>
        <div className="flex justify-between mt-2 md:mt-4 text-sm md:text-base md:px-4 px-5">
          <p>Total:</p>
          <p className="">$ 54.12</p>
        </div>
        <div className="mt-6 md:px-4 px-5 py-4 bg-nature-600 border-t border-nature-800">
          <div className="flex justify-between font-extrabold text-sm md:text-base">
            <p>Subtotal:</p>
            <p className="">$ 54.12</p>
          </div>
          <div className="flex gap-4 mt-5 md:mt-6">
            <Link href={'/cart/checkout'} className="w-full">
              <Button className="w-full rounded-xl">Checkout</Button>
            </Link>
            <Link href={'/cart'} className="w-full">
              <Button variant={'outline'} className="w-full rounded-xl">
                View cart
              </Button>
            </Link>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CartHover;
