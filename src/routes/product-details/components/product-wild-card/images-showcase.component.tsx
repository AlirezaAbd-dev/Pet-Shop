'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import SvgPolygon from '@/assets/svg/polygon-1.svg';
import Icon from '@/components/icon';
import { cn } from '@/lib/utils';

type ImageShowcaseProps = {
  images: string[];
};

const ImagesShowcase = (props: ImageShowcaseProps) => {
  const [selectedImage, setSelectedImage] = useState(props.images[0]);

  const discount: number = 25;

  return (
    <section className="flex gap-3 md:gap-0 md:col-span-6">
      <ul className="flex flex-col pr-5 md:pr-14 gap-2 md:gap-6 max-h-[248px] md:max-h-[600px] overflow-y-auto no-scrollbar">
        {props.images.map((i) => (
          <li
            key={i}
            onClick={() => setSelectedImage(i)}
            className={cn(
              'flex justify-center items-center w-[68px] min-h-[56px] md:w-[110px] md:min-h-[111px] rounded-lg cursor-pointer border border-nature-900',
              selectedImage === i ? 'border-primary-500' : '',
            )}
          >
            <Image
              src={i}
              alt="example"
              quality={100}
              width={39}
              height={85}
              className="h-[41px] w-auto md:h-[85px]"
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
          src={selectedImage}
          alt="example"
          quality={100}
          width={224}
          height={488}
          className="h-[200px] w-auto md:h-[488px]"
        />
      </div>
    </section>
  );
};

export default ImagesShowcase;
