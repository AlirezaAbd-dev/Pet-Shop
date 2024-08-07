'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Product } from '@/app/(core)/product/[productId]/page';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { FAKE_PRODUCTS } from '../constants/fake-products.constants';
import {
  CATEGORIES_LIST,
  CategoiesListType,
} from '../constants/home.constants';
import StandardProductCard from './cards/standard-product-card.component';

type HomeTopCategoriesProps = {
  products: Product[];
};

const HomeTopCategories = (props: HomeTopCategoriesProps) => {
  // const [categoryValue, setCategoryValue] = useState<CategoiesListType>('All');

  return (
    <>
      <section className="mt-12 md:mt-24">
        <h3 className="text-xl md:text-4xl font-nunito font-black text-center">
          Top Categories & Food products
        </h3>
        {/* <ul className="flex justify-center mt-5 md:mt-8 gap-4">
          {CATEGORIES_LIST.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                setCategoryValue(item.name);
              }}
              className={cn(
                'flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 w-[99px] md:w-[144px] rounded-full border border-nature-900 cursor-pointer',
                item.name === categoryValue
                  ? 'border-primary-500 font-extrabold text-primary-500'
                  : '',
              )}
            >
              <Icon
                className={cn(
                  'flex justify-center items-center rounded-full w-7 md:w-10 h-7 md:h-10 md:text-2xl bg-nature-800',
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
        </ul> */}
      </section>
      <Swiper
        className="hidden md:block px-20 mt-10"
        spaceBetween={24}
        slidesPerView={4}
      >
        {props.products.map((item) => (
          <SwiperSlide key={item.id}>
            <StandardProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="md:hidden mt-6 px-4"
        spaceBetween={16}
        slidesPerView={1.1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.categories-pagination',
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
      >
        {props.products.map((item) => (
          <SwiperSlide key={item.id}>
            <StandardProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="block md:hidden">
        <div className="categories-pagination"></div>
      </div>
      <div className="flex justify-center">
        <Link href="/shop">
          <Button className="mt-6 md:mt-10 font-black font-nunito w-[225px] h-[48px] md:h-16 md:text-xl shadow-color-md md:shadow-color-xl">
            Show more
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HomeTopCategories;
