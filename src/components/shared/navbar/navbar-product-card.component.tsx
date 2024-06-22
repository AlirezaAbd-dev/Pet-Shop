import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import SvgWeight from '@/assets/svg/weight-gray-mobile.svg';
import Icon from '@/components/icon';

const NavbarProductCard = () => {
  return (
    <li className="w-full flex justify-between pb-5 md:pb-6 border-b border-nature-900">
      <div className="w-full flex md:gap-4">
        <div className="flex justify-center items-center md:w-[83px] md:h-[83px] bg-nature-700 rounded-xl">
          <Image
            src={'/examples/product-image-1.png'}
            width={30}
            height={64}
            alt="product-image-1"
          />
        </div>
        <div>
          <p className="font-nunito font-bold text-lg">Royal Canin Urinary</p>
          <Icon className="flex items-center gap-2 mt-2 md:text-base text-text-300">
            <SvgWeight />
            50KG
          </Icon>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-1 md:gap-2">
          <p className="font-bold md:text-lg">$89.12</p>
          <p className="line-through decoration-text-300 text-text-300 md:text-base">
            $89.12
          </p>
        </div>
        {/* counter */}
        <div className="flex gap-4 mt-3 md:gap-4  justify-between items-center md:p-1 py-1 px-2 border border-nature-900 rounded-lg">
          <span className="flex justify-center items-center w-6 h-6 md:w-7 md:h-7 bg-nature-700 rounded-[4px] md:rounded-lg">
            <Minus className="w-4 md:w-5 text-nature-900" />
          </span>
          <p className="text-lg md:text-xl">1</p>
          <span className="flex justify-center items-center w-6 h-6 md:w-7 md:h-7 bg-nature-700 rounded-[4px] md:rounded-lg">
            <Plus className="w-4 h-4 md:w-5 md:h-5 text-text-400" />
          </span>
        </div>
      </div>
    </li>
  );
};

export default NavbarProductCard;
