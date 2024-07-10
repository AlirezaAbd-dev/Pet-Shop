import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Icon from '@/components/icon';

import SvgHeartDesktop from '@icons/heart-desktop.svg';
import SvgHeart from '@icons/heart.svg';
import SvgWeightDesktop from '@icons/weight-desktop.svg';
import SvgWeight from '@icons/weight.svg';

const StandardProductCard = () => {
  return (
    <Link
      href="/product/2"
      className="flex flex-col border border-nature-800 rounded-2xl p-4"
    >
      <div className="relative flex justify-center items-center h-[152px] bg-nature-600 rounded-xl">
        <Icon className="absolute right-3 top-3 flex justify-center items-center w-8 h-8 md:w-9 md:h-9 cursor-pointer rounded-full bg-white">
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
      <div className="mt-4 flex items-start justify-between">
        <p className="font-bold font-nunito md:text-xl max-w-[152px]">
          Purina pro plan urinary
        </p>
        <Icon className="flex md:items-center gap-1 text-sm md:text-base font-bold">
          <SvgWeight className="md:hidden w-5 h-5" />
          <SvgWeightDesktop className="hidden md:block" />
          25KG
        </Icon>
      </div>
      <p className="text-sm md:text-base mt-3 leading-[26px] md:leading-7">
        Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing elit
      </p>
      <p className="font-bold text-xl text-primary-500 mt-3 md:mt-4">$120.00</p>
    </Link>
  );
};

export default StandardProductCard;
