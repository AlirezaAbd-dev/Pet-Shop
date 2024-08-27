import Link from 'next/link';
import React from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';
import SvgWeight from '@/assets/svg/weight-16.svg';
import Icon from '@/components/icon';

import SvgWeightDesktop from '@icons/weight-desktop.svg';

type OrderDetailsCard = {
  product: Product;
  quantity: number;
  finalPrice: number;
};

const OrderDetailsCard = (props: OrderDetailsCard) => {
  return (
    <Link
      href={`/product/${props.product.id}`}
      className="flex items-start gap-4 md:gap-5 bg-nature-600 rounded-xl p-3 md:p-4"
    >
      <img
        src={props.product.image_urls[0]}
        alt={props.product.name}
        className="w-[76px] md:w-[115px] h-auto"
      />
      <div className="w-full">
        <div className="flex items-start justify-between">
          <p className="font-bold font-nunito text-sm md:text-base max-w-[185px]">
            {props.product.name}
          </p>
          <Icon className="flex md:items-center gap-1 text-xs md:text-base">
            <SvgWeight className="md:hidden w-5 h-5" />
            <SvgWeightDesktop className="hidden md:block" />
            {(props.quantity * props.product.weight).toFixed(2)}KG
          </Icon>
        </div>
        <p className="text-xs md:text-base mt-1 md:mt-4 leading-[26px] md:leading-7">
          {props.product.description}
        </p>
        <div className="flex gap-2 items-center mt-3 md:mt-4">
          <p className="font-bold text-primary-500 md:text-lg">
            ${props.finalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OrderDetailsCard;
