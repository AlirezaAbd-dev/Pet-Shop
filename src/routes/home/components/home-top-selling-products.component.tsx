'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Product } from '@/app/(core)/product/[productId]/page';
import SvgCatFootDesktop from '@/assets/svg/cat-foot-filled-desktop.svg';
import SvgCatFoot from '@/assets/svg/cat-foot-filled.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

import TopSellingProductCard from './cards/top-selling-product-card.component';

type HomeTopSellingProductsProps = {
  products: Product[];
};

const HomeTopSellingProducts = (props: HomeTopSellingProductsProps) => {
  const router = useRouter();

  return (
    <main className="md:px-20">
      <section className="relative flex flex-col md:flex-row-reverse md:gap-6 items-center md:items-start w-full pt-6 md:px-6 md:py-8 mt-16 md:mt-24 bg-secondary-500 md:rounded-[36px] md:overflow-hidden  pb-[152px] md:pb-8">
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
          {props.products.map((p) => (
            <SwiperSlide key={p.id}>
              <TopSellingProductCard {...p} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:hidden">
          <div className="top-selling-pagination"></div>
        </div>

        {/* for desktop */}
        <Swiper
          className="hidden md:flex w-full"
          spaceBetween={24}
          slidesPerView={3}
        >
          {props.products.map((p) => (
            <SwiperSlide key={p.id} className="h-[358px]">
              <TopSellingProductCard {...p} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col items-center md:items-start md:min-w-[310px]">
          <p className="hidden md:block font-nunito font-black text-4xl text-white">
            Our Best Selling <br />
            Products
          </p>
          <Button
            onClick={() => {
              router.push('/shop');
            }}
            className="mt-6 md:mt-4 p-1 pl-4 w-[210px] h-[48px] md:w-[225px] md:h-[64px] flex justify-between font-nunito font-black md:text-xl rounded-full"
          >
            Show store
            <Icon>
              <SvgCatFoot className="md:hidden" />
              <SvgCatFootDesktop className="hidden md:block" />
            </Icon>
          </Button>
          <img
            src="/static/pet 1.png"
            alt="pet-looking-up"
            className="absolute bottom-0 -left-5 w-[228px] md:w-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default HomeTopSellingProducts;
