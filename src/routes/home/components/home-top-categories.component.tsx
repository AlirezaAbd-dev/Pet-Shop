'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import SvgHeart from '@icons/heart.svg';
import SvgWeight from '@icons/weight.svg';

import {
  CATEGORIES_LIST,
  CategoiesListType,
} from '../constants/home.constants';

const HomeTopCategories = () => {
  const [categoryValue, setCategoryValue] = useState<CategoiesListType>('All');

  return (
    <>
      <section className="mt-12">
        <h3 className="text-xl font-nunito font-black text-center">
          Top Categories & Food products
        </h3>
        <ul className="flex justify-center mt-5 gap-4">
          {CATEGORIES_LIST.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                setCategoryValue(item.name);
              }}
              className={cn(
                'flex items-center gap-2 px-4 py-3 rounded-full border border-nature-900 cursor-pointer transition-all delay-75',
                item.name === categoryValue
                  ? 'border-primary-500 font-extrabold text-primary-500'
                  : '',
              )}
            >
              <Icon
                className={cn(
                  'flex justify-center items-center rounded-full w-7 h-7 bg-nature-800 transition-all delay-75',
                  item.name === categoryValue ? 'bg-primary-500' : '',
                )}
              >
                {item.name === categoryValue ? (
                  <item.activeIcon className="w-5 h-5" />
                ) : (
                  <item.icon className="w-5 h-5" />
                )}
              </Icon>
              {item.name}
            </li>
          ))}
        </ul>
      </section>
      <Swiper
        className="mt-6 px-4"
        spaceBetween={16}
        slidesPerView={1.1}
        modules={[Pagination]}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
      >
        <SwiperSlide className="flex flex-col border border-nature-800 rounded-2xl p-4">
          <div className="relative flex justify-center items-center h-[152px] bg-nature-600 rounded-xl">
            <Icon className="absolute right-3 top-3 flex justify-center items-center w-8 h-8 rounded-full bg-white">
              <SvgHeart className="w-6 h-6" />
            </Icon>
            <Image
              src={'/examples/product-image-1.png'}
              alt="product-1"
              width={78}
              height={132}
            />
          </div>
          <div className="mt-4 flex justify-between">
            <p className="font-bold font-nunito max-w-[152px]">
              Purina pro plan urinary
            </p>
            <Icon className="flex gap-1 text-sm font-bold">
              <SvgWeight className="w-5 h-5" />
              25KG
            </Icon>
          </div>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
            elit
          </p>
          <p className="font-bold text-primary-500 mt-3">$120.00</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col border border-nature-800 rounded-2xl p-4">
          <div className="relative flex justify-center items-center h-[152px] bg-nature-600 rounded-xl">
            <Icon className="absolute right-3 top-3 flex justify-center items-center w-8 h-8 rounded-full bg-white">
              <SvgHeart className="w-6 h-6" />
            </Icon>
            <Image
              src={'/examples/product-image-1.png'}
              alt="product-1"
              width={78}
              height={132}
            />
          </div>
          <div className="mt-4 flex justify-between">
            <p className="font-bold font-nunito max-w-[152px]">
              Purina pro plan urinary
            </p>
            <Icon className="flex gap-1 text-sm font-bold">
              <SvgWeight className="w-5 h-5" />
              25KG
            </Icon>
          </div>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
            elit
          </p>
          <p className="font-bold text-primary-500 mt-3">$120.00</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col border border-nature-800 rounded-2xl p-4">
          <div className="relative flex justify-center items-center h-[152px] bg-nature-600 rounded-xl">
            <Icon className="absolute right-3 top-3 flex justify-center items-center w-8 h-8 rounded-full bg-white">
              <SvgHeart className="w-6 h-6" />
            </Icon>
            <Image
              src={'/examples/product-image-1.png'}
              alt="product-1"
              width={78}
              height={132}
            />
          </div>
          <div className="mt-4 flex justify-between">
            <p className="font-bold font-nunito max-w-[152px]">
              Purina pro plan urinary
            </p>
            <Icon className="flex gap-1 text-sm font-bold">
              <SvgWeight className="w-5 h-5" />
              25KG
            </Icon>
          </div>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
            elit
          </p>
          <p className="font-bold text-primary-500 mt-3">$120.00</p>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center">
        <Button className="mt-6 font-black font-nunito w-[225px] h-[48px]">
          Show more
        </Button>
      </div>
    </>
  );
};

export default HomeTopCategories;
