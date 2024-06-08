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
import StandardProductCard from './cards/standard-product-card.component';

const HomeTopCategories = () => {
  const [categoryValue, setCategoryValue] = useState<CategoiesListType>('All');

  return (
    <>
      <section className="mt-12 md:mt-24">
        <h3 className="text-xl md:text-4xl font-nunito font-black text-center">
          Top Categories & Food products
        </h3>
        <ul className="flex justify-center mt-5 md:mt-8 gap-4">
          {CATEGORIES_LIST.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                setCategoryValue(item.name);
              }}
              className={cn(
                'flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 rounded-full border border-nature-900 cursor-pointer transition-all delay-75',
                item.name === categoryValue
                  ? 'border-primary-500 font-extrabold text-primary-500'
                  : '',
              )}
            >
              <Icon
                className={cn(
                  'flex justify-center items-center rounded-full w-7 md:w-10 h-7 md:h-10 md:text-2xl bg-nature-800 transition-all delay-75',
                  item.name === categoryValue ? 'bg-primary-500' : '',
                )}
              >
                {item.name === categoryValue ? (
                  <>
                    <item.activeIcon className="md:hidden w-5 h-5" />
                    <item.activeDesktopIcon className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <item.icon className="md:hidden w-5 h-5" />
                    <item.desktopIcon className="hidden md:block" />
                  </>
                )}
              </Icon>
              {item.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="hidden md:flex gap-6 px-20 mt-10">
        <StandardProductCard />
        <StandardProductCard />
        <StandardProductCard />
        <StandardProductCard />
      </section>
      <Swiper
        className="md:hidden mt-6 px-4"
        spaceBetween={16}
        slidesPerView={1.1}
        modules={[Pagination]}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
      >
        <SwiperSlide>
          <StandardProductCard />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col border border-nature-800 rounded-2xl p-4">
          <StandardProductCard />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col border border-nature-800 rounded-2xl p-4">
          <StandardProductCard />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center">
        <Button className="mt-6 md:mt-10 font-black font-nunito w-[225px] h-[48px] md:h-16 md:text-xl shadow-color-md md:shadow-color-xl">
          Show more
        </Button>
      </div>
    </>
  );
};

export default HomeTopCategories;
