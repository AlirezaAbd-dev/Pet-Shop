import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Icon from '@/components/icon';

import SvgHeartDesktop from '@icons/heart-desktop.svg';
import SvgHeart from '@icons/heart.svg';
import SvgWeightDesktop from '@icons/weight-desktop.svg';
import SvgWeight from '@icons/weight-extra-small.svg';

const ShopProductCard = () => {
  return (
    <Link
      href={'/product/1'}
      className="flex md:flex-col gap-4 md:gap-0 border border-nature-800 rounded-2xl p-3 md:p-4"
    >
      <div className="relative flex justify-center items-start md:items-center h-auto md:h-[152px] bg-inherit md:bg-nature-600 rounded-xl">
        <Icon className="hidden md:flex absolute right-3 top-3 justify-center items-center w-8 h-8 md:w-9 md:h-9 cursor-pointer rounded-full bg-white">
          <SvgHeart className="md:hidden w-6 h-6" />
          <SvgHeartDesktop className="hidden md:block" />
        </Icon>
        <Image
          src={'/examples/product-image-1.png'}
          alt="product-1"
          width={78}
          height={132}
        />
      </div>
      <div>
        <div className="mt-0 md:mt-4 flex justify-between items-start">
          <p className="font-bold font-nunito text-sm md:text-xl max-w-[120px]">
            Purina pro plan urinary
          </p>
          <Icon className="flex md:items-center gap-1 text-xs md:text-base md:font-bold">
            <SvgWeight className="md:hidden w-5 h-5" />
            <SvgWeightDesktop className="hidden md:block" />
            25KG
          </Icon>
        </div>
        <p className="text-xs md:text-base mt-2 md:mt-3">
          Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
          elit
        </p>
        <p className="font-bold text-sm md:text-xl text-primary-500 mt-3 md:mt-4">
          $120.00
        </p>
      </div>
    </Link>
  );
};

export default ShopProductCard;
