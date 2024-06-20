import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import SvgRemoveDesktop from '@/assets/svg/delete-cart-desktop.svg';
import SvgRemoveMobile from '@/assets/svg/delete-cart-mobile.svg';
import Icon from '@/components/icon';

import ProductCartCard from './cards/product-cart-card.component';

const ShoppingCart = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between">
        <p className="font-nunito font-black text-lg md:text-2xl">
          Shopping cart
        </p>
        <Icon className="flex items-center gap-2 text-sm md:text-lg">
          <SvgRemoveMobile className="md:hidden" />
          <SvgRemoveDesktop className="hidden md:block" />
          Remove all
        </Icon>
      </div>
      <ul className="flex flex-col gap-4 md:gap-6 mt-6">
        <ProductCartCard />
        <ProductCartCard />
      </ul>
    </section>
  );
};

export default ShoppingCart;
