'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { Product } from '@/app/(core)/product/[productId]/page';
import { Button } from '@/components/ui/button';

import StandardProductCard from './cards/standard-product-card.component';

type HomeSuperSaleProps = {
  products: Product[];
};

const HomeSuperSale = (props: HomeSuperSaleProps) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <main className="md:px-20 flex flex-col-reverse md:grid md:grid-cols-12 gap-5 w-full mt-16 md:mt-24">
      <div className="flex flex-col items-end w-full md:col-span-9">
        <div className="hidden md:flex gap-4 justify-self-end mt-[28px]">
          <div
            className="bg-primary-50/5 flex justify-center items-center cursor-pointer w-[45px] h-[45px] rounded-full"
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
          >
            <ChevronLeft className="text-primary-200" />
          </div>

          <div
            className="bg-primary-500 flex justify-center items-center cursor-pointer w-[45px] h-[45px] rounded-full"
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
          >
            <ChevronRight className="text-white" />
          </div>
        </div>

        {/* mobile */}
        <Swiper
          className="md:hidden px-5 w-full"
          spaceBetween={16}
          slidesPerView={1.1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: '.super-sale-pagination',
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
        <div className="block md:hidden self-center">
          <div className="super-sale-pagination"></div>
        </div>
        <div className="flex justify-center md:hidden self-center">
          <Link href="/shop?promotion=true">
            <Button className="mt-6 md:mt-10 font-black font-nunito w-[225px] h-[48px] md:h-16 md:text-xl shadow-color-md md:shadow-color-xl">
              Show more
            </Button>
          </Link>
        </div>

        {/* desktop */}
        <Swiper
          className="hidden md:block w-full mt-5"
          spaceBetween={16}
          slidesPerView={3}
          modules={[Navigation]}
          navigation={{
            enabled: true,
            nextEl: '.swiper-button-prev .super-sale-prev',
            prevEl: '.swiper-button-next .super-sale-next',
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {props.products.map((item) => (
            <SwiperSlide key={item.id}>
              <StandardProductCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:col-span-3 md:-order-1 px-5 md:px-0">
        {/* mobile */}
        <div className="md:hidden w-[315px] h-[314px] relative">
          <div className="w-[315px] h-[211px] px-4 pt-[147px] pb-4 left-0 top-[103px] absolute bg-primary-500 justify-center items-center inline-flex">
            <Link href={'/shop?promotion=true'} className="w-full">
              <Button
                variant={'secondary'}
                className="w-full h-12 rounded-none font-extrabold"
              >
                Show more
              </Button>
            </Link>
          </div>
          <img
            className="w-44 h-[250px] left-[70px] top-0 absolute"
            src="/static/super-sale.png"
          />
        </div>

        {/* desktop */}
        <div className="hidden md:block w-[301px] h-[461px] relative">
          <div className="w-[301px] h-[365px] left-0 top-[96px] absolute bg-primary-500" />
          <div className="w-[276px] left-[12px] top-[-18px] absolute flex-col justify-center items-center inline-flex">
            <img className="w-[276px] h-[409px]" src="/static/super-sale.png" />
            <Link href={'/shop?promotion=true'} className="w-full">
              <Button
                variant={'secondary'}
                className="w-full h-[54px] rounded-none md:text-xl font-extrabold"
              >
                Show more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeSuperSale;
