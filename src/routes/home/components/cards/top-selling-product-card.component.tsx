import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Product } from '@/app/(core)/product/[productId]/page';

type TopSellingProductCardProps = Pick<
  Product,
  'name' | 'price_after_promotion' | 'description' | 'image_urls' | 'id'
>;

const TopSellingProductCard = (props: TopSellingProductCardProps) => {
  return (
    <Link
      href={`/product/${props.id}`}
      className="flex flex-col items-center rounded-xl md:rounded-3xl bg-[#FAFAFA] p-4 md:p-6 md:h-full md:min-w-[285px]"
    >
      <img
        src={props.image_urls[0]}
        alt={props.name}
        className="w-auto h-[187px]  md:h-[209]"
      />
      <p className="mt-4 md:mt-6 font-nunito font-bold md:text-xl text-center">
        {props.description}
      </p>
      <p className="font-extrabold text-primary-500 md:text-xl md:mt-3">
        ${props.price_after_promotion}
      </p>
    </Link>
  );
};

export default TopSellingProductCard;
