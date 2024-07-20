'use client';

import React from 'react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Brand } from '@/app/(core)/shop/page';

import { BRANDS_LIST } from '../constants/home.constants';

const Slide = (props: { url: string }) => {
  return (
    <div className="flex items-center justify-center h-[50px] md:h-[83] max-h-[50px] md:max-h-[83px]">
      <img
        src={`/static/brands/${props.url}`}
        alt={props.url}
        className="h-full"
      />
    </div>
  );
};

type HomeBrandsWeLoveProps = { brands: Brand[] };

const HomeBrandsWeLove = (props: HomeBrandsWeLoveProps) => {
  return (
    <section className="mt-16 md:mt-24">
      <p className="font-black font-nunito text-xl md:text-4xl text-center">
        Brands We Love
      </p>
      <Swiper
        modules={[Autoplay, FreeMode]}
        className="mt-5 md:hidden"
        autoplay={{ delay: 2000 }}
        loop
        freeMode
        spaceBetween={44}
        slidesPerView={2.2}
      >
        {props.brands.map((item) => (
          <SwiperSlide key={item.id}>
            <Slide url={item.logo} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:flex gap-20 justify-between px-20 mt-8">
        {props.brands.map((item) => (
          <Slide key={item.id} url={item.logo} />
        ))}
      </div>
    </section>
  );
};

export default HomeBrandsWeLove;
