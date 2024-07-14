import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';
import Icon from '@/components/icon';

import SvgHeartDesktop from '@icons/heart-desktop.svg';
import SvgHeart from '@icons/heart.svg';
import SvgWeightDesktop from '@icons/weight-desktop.svg';
import SvgWeight from '@icons/weight.svg';

type StandardProductCardProps = Product;

const StandardProductCard = (props: StandardProductCardProps) => {
  return (
    <Link
      href={`/product/${props.id}`}
      className="flex flex-col border border-nature-800 rounded-2xl p-4 md:col-span-1"
    >
      <div className="relative flex justify-center items-center h-[152px] bg-nature-600 rounded-xl">
        <Icon className="absolute right-3 top-3 flex justify-center items-center w-8 h-8 md:w-9 md:h-9 cursor-pointer rounded-full bg-white">
          <SvgHeart className="md:hidden w-6 h-6" />
          <SvgHeartDesktop className="hidden md:block" />
        </Icon>
        <img
          src={props.image_urls[0]}
          alt={props.name}
          className="w-auto h-[132px]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <p className="font-bold font-nunito md:text-xl max-w-[152px]">
          {props.name}
        </p>
        <Icon className="flex md:items-center gap-1 text-sm md:text-base font-bold">
          <SvgWeight className="md:hidden w-5 h-5" />
          <SvgWeightDesktop className="hidden md:block" />
          {props.weight}KG
        </Icon>
      </div>
      <p className="text-sm md:text-base mt-3 leading-[26px] md:leading-7">
        {props.description}
      </p>
      <p className="font-bold text-xl text-primary-500 mt-3 md:mt-4">
        ${props.price_after_promotion.toFixed(2)}
      </p>
    </Link>
  );
};

export default StandardProductCard;
