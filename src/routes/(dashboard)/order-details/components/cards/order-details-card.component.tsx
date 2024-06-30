import React from 'react';

import SvgWeight from '@/assets/svg/weight-16.svg';
import Icon from '@/components/icon';

import SvgWeightDesktop from '@icons/weight-desktop.svg';

const OrderDetailsCard = () => {
  return (
    <li className="flex gap-4 md:gap-5 bg-nature-600 rounded-xl p-3 md:p-4">
      <img
        src="/examples/product-image-1.png"
        className="h-[76px] md:h-[115px]"
      />
      <div>
        <div className="flex items-start justify-between">
          <p className="font-bold font-nunito text-sm md:text-base max-w-[185px]">
            Purina pro plan urinary
          </p>
          <Icon className="flex md:items-center gap-1 text-xs md:text-base">
            <SvgWeight className="md:hidden w-5 h-5" />
            <SvgWeightDesktop className="hidden md:block" />
            25KG
          </Icon>
        </div>
        <p className="text-xs md:text-base mt-1 md:mt-4 leading-[26px] md:leading-7">
          Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
          elit
        </p>
        <div className="flex gap-2 items-center mt-3 md:mt-4">
          <p className="font-bold text-primary-500 md:text-lg">$120.00</p>
          <p className="text-text-300 line-through decoration-text-300 text-sm md:text-base">
            $89.12
          </p>
        </div>
      </div>
    </li>
  );
};

export default OrderDetailsCard;
