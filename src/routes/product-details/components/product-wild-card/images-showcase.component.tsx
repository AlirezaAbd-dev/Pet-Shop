'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import SvgPolygon from '@/assets/svg/polygon-1.svg';
import Icon from '@/components/icon';
import { cn } from '@/lib/utils';

const FAKE_IMAGES = [
  {
    id: 1,
    image: '/examples/single-product-image-1.png',
  },
  {
    id: 2,
    image: '/examples/single-product-image-1.png',
  },
  {
    id: 3,
    image: '/examples/single-product-image-1.png',
  },
  {
    id: 4,
    image: '/examples/single-product-image-1.png',
  },
  {
    id: 5,
    image: '/examples/single-product-image-1.png',
  },
  {
    id: 6,
    image: '/examples/single-product-image-1.png',
  },
];

const ImagesShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(FAKE_IMAGES[0].id);

  const discount: number = 25;

  return (
    <section className="flex gap-3 md:gap-0 md:col-span-6">
      <ul className="flex flex-col pr-5 md:pr-14 gap-2 md:gap-6 max-h-[248px] md:max-h-[600px] overflow-y-auto no-scrollbar">
        {FAKE_IMAGES.map((i) => (
          <li
            key={i.id}
            onClick={() => setSelectedImage(i.id)}
            className={cn(
              'flex justify-center items-center w-[68px] min-h-[56px] md:w-[110px] md:min-h-[111px] rounded-lg cursor-pointer border border-nature-900',
              selectedImage === i.id ? 'border-primary-500' : '',
            )}
          >
            <Image
              src={i.image}
              alt="example"
              width={39}
              height={85}
              className="w-[19px] h-[41px] md:w-[39px] md:h-[85px]"
            />
          </li>
        ))}
      </ul>
      <div className="md:relative flex justify-center items-center w-full md:h-[600px] bg-nature-600 rounded-2xl">
        <Icon className="hidden md:block absolute -top-16 -right-12">
          <SvgPolygon className="relative" />
          <p
            className={cn(
              'absolute top-12 right-[50px] text-white font-nunito font-black text-xl',
              discount < 10 ? 'right-[55px]' : '',
              discount > 10 && discount < 100 ? 'right-[50px]' : '',
              discount === 100 ? 'right-[46px]' : '',
            )}
          >
            {discount}%
          </p>
        </Icon>
        <Image
          src={FAKE_IMAGES.find((i) => i.id === selectedImage)?.image as string}
          alt="example"
          width={224}
          height={488}
          className="w-[92px] h-[200px] md:w-[224px] md:h-[488px]"
        />
      </div>
    </section>
  );
};

export default ImagesShowcase;
