'use client';

import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SvgCatFootDesktop from '@/assets/svg/cat-foot-filled-desktop.svg';
import SvgCatFoot from '@/assets/svg/cat-foot-filled.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

import TopSellingProductCard from './cards/top-selling-product-card.component';

const HomeTopSellingProducts = () => {
  return (
    <main className="md:px-20">
      <section className="flex flex-col md:flex-row-reverse md:justify-between items-center w-full pt-6 md:px-6 md:py-8 mt-16 md:mt-24 bg-secondary-500 md:rounded-[36px] md:overflow-hidden">
        <h4 className="font-black font-nunito text-xl text-white md:hidden">
          Our Best Selling Products
        </h4>

        {/* for mobile */}
        <Swiper
          className="mt-5 w-full px-4 md:hidden"
          spaceBetween={16}
          slidesPerView={1.1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: '.top-selling-pagination',
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet white-pagination',
            bulletActiveClass:
              'swiper-pagination-bullet-active white-pagination-active',
          }}
        >
          <SwiperSlide>
            <TopSellingProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <TopSellingProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <TopSellingProductCard />
          </SwiperSlide>
        </Swiper>
        <div className="top-selling-pagination"></div>
        {/* for desktop */}
        <div className="hidden md:flex w-full justify-end gap-6">
          <TopSellingProductCard />
          <TopSellingProductCard />
          <TopSellingProductCard />
        </div>

        <div className="flex flex-col items-center md:items-start w-full">
          <p className="hidden md:block font-nunito font-black text-4xl text-white">
            Our Best Selling Products
          </p>
          <Button className="mt-6 md:mt-4 p-1 pl-4 w-[210px] h-[48px] md:w-[225px] md:h-[64px] flex justify-between font-nunito font-black md:text-xl rounded-full">
            Show store
            <Icon>
              <SvgCatFoot className="md:hidden" />
              <SvgCatFootDesktop className="hidden md:block" />
            </Icon>
          </Button>
          <Image
            src={'/static/pet 1.png'}
            width={316}
            height={212}
            alt="cat"
            className="self-start mt-4 w-[277px] h-[152px] md:w-[316] md:h-[212] md:-ml-12 md:-mb-16"
          />
        </div>
      </section>
    </main>
  );
};

export default HomeTopSellingProducts;
