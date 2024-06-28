import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import SvgWeightDesktop from '@/assets/svg/weight-gray-desktop.svg';
import SvgWeightMobile from '@/assets/svg/weight-gray-mobile.svg';
import Icon from '@/components/icon';

const ProductCartCard = () => {
  return (
    <li className="flex justify-between md:items-center border border-nature-900 rounded-2xl p-3 md:p-5">
      <div className="flex gap-3 md:gap-4">
        <div className="flex items-center justify-center w-[53px] h-[53px] md:w-20 md:h-20 bg-nature-700 rounded-xl">
          <Image
            src={'/examples/product-image-1.png'}
            width={30}
            height={64}
            alt="product-1"
            className="w-[19px] h-[40px] md:w-[30px] md:h-[64px]"
          />
        </div>
        <div>
          <p className="font-nunito font-bold text-sm md:text-xl">
            Royal Canin Urinary
          </p>
          <Icon className="flex gap-2 mt-2 text-text-300 text-sm md:text-lg">
            <SvgWeightMobile className="md:hidden" />
            <SvgWeightDesktop className="hidden md:block" />
            50KG
          </Icon>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-end md:items-center md:gap-9">
        <div className="md:flex md:flex-col md:justify-center md:h-full text-right">
          <div className="md:flex gap-2 text-xs md:text-xl text-text-300">
            <p className="line-through decoration-text-300">$89.12</p>
            <span className="hidden md:inline font-semibold px-2 py-1 text-white text-base w-[49px] h-[30px] rounded-[50px] bg-error-500">
              25%
            </span>
          </div>
          <p className="font-bold text-sm md:text-2xl mt-1 md:mt-3">$ 89.12</p>
        </div>
        <div className="mt-3 md:mt-0">
          <div className="flex gap-3 md:gap-6 justify-between items-center px-2 py-[5px] md:p-3 border border-nature-900 rounded-lg md:rounded-2xl">
            <span className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-nature-700 rounded-[4px] md:rounded-lg">
              <Minus className="w-4 md:w-5 text-nature-900" />
            </span>
            <p className="text-lg md:text-[24px]">1</p>
            <span className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-nature-700 rounded-[4px] md:rounded-lg">
              <Plus className="w-4 h-4 md:w-5 md:h-5 text-text-400" />
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCartCard;
