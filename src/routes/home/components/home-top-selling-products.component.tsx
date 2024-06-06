'use client';

import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SvgCatFoot from '@/assets/svg/cat-foot-filled.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

const HomeTopSellingProducts = () => {
  return (
    <section className="flex flex-col items-center w-full pt-6 mt-16 bg-secondary-500">
      <h4 className="font-black font-nunito text-xl text-white">
        Our Best Selling Products
      </h4>
      <Swiper
        className="mt-5 w-full"
        spaceBetween={16}
        slidesPerView={1.1}
        modules={[Pagination]}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
      >
        <SwiperSlide className="flex flex-col items-center rounded-xl bg-[#FAFAFA] p-4">
          <Image
            src={'/examples/product-image-1.png'}
            alt="product-1"
            width={111}
            height={187}
          />
          <p className="mt-4 font-nunito font-bold">Purina beneful perros</p>
          <p className="font-extrabold text-primary-500">$120.00</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center rounded-xl bg-[#FAFAFA] p-4">
          <Image
            src={'/examples/product-image-1.png'}
            alt="product-1"
            width={111}
            height={187}
          />
          <p className="mt-4 font-nunito font-bold">Purina beneful perros</p>
          <p className="font-extrabold text-primary-500">$120.00</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center rounded-xl bg-[#FAFAFA] p-4">
          <Image
            src={'/examples/product-image-1.png'}
            alt="product-1"
            width={111}
            height={187}
          />
          <p className="mt-4 font-nunito font-bold">Purina beneful perros</p>
          <p className="font-extrabold text-primary-500">$120.00</p>
        </SwiperSlide>
      </Swiper>
      <Button className="mt-6 p-1 pl-4 w-[210px] h-[48px] flex justify-between font-nunito font-black rounded-full">
        Show store
        <Icon>
          <SvgCatFoot />
        </Icon>
      </Button>
      <Image
        src={'/static/pet 1.png'}
        width={277}
        height={152}
        alt="cat"
        className="self-start mt-4"
      />
    </section>
  );
};

export default HomeTopSellingProducts;
