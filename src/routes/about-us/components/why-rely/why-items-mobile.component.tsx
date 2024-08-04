import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SvgCatWhite24 from '@/assets/svg/cat-white-24.svg';
import SvgCatWhite36 from '@/assets/svg/cat-white-36.svg';
import SvgCheckmarkWhite24 from '@/assets/svg/checkmark-white-24.svg';
import SvgCheckmarkWhite36 from '@/assets/svg/checkmark-white-36.svg';
import SvgDeliveryWhite24 from '@/assets/svg/delivery-white-24.svg';
import SvgDeliveryWhite36 from '@/assets/svg/delivery-white-36.svg';
import SvgHomeWhite24 from '@/assets/svg/home-white-24.svg';
import SvgHomeWhite36 from '@/assets/svg/home-white-36.svg';

const WhyRelyItemsMobile = () => {
  return (
    <>
      <Swiper
        className="md:hidden mt-6 px-10"
        spaceBetween={16}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.why-pagination',
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
      >
        <SwiperSlide>
          <div className="bg-nature-600 rounded-xl p-4">
            <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#B9112B]">
              <SvgCatWhite24 className="md:hidden" />
              <SvgCatWhite36 className="hidden md:block" />
            </div>
            <p className="mt-4 font-black font-nunito md:text-lg">
              Variety of products
              <br /> for pets
            </p>
            <p className="mt-2 text-sm md:mt-3 md:text-base">
              Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
              scing elit. Ut{' '}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-nature-600 rounded-xl p-4">
            <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#058441]">
              <SvgCheckmarkWhite24 className="md:hidden" />
              <SvgCheckmarkWhite36 className="hidden md:block" />
            </div>
            <p className="mt-4 font-black font-nunito md:text-lg">
              Ensuring the quality of
              <br /> products
            </p>
            <p className="mt-2 text-sm md:mt-3 md:text-base">
              Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
              scing elit. Ut{' '}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-nature-600 rounded-xl p-4">
            <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#2CC0FE]">
              <SvgDeliveryWhite24 className="md:hidden" />
              <SvgDeliveryWhite36 className="hidden md:block" />
            </div>
            <p className="mt-4 font-black font-nunito md:text-lg">
              Fast delivery of
              <br /> products
            </p>
            <p className="mt-2 text-sm md:mt-3 md:text-base">
              Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
              scing elit. Ut{' '}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-nature-600 rounded-xl p-4">
            <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#FF8413]">
              <SvgHomeWhite24 className="md:hidden" />
              <SvgHomeWhite36 className="hidden md:block" />
            </div>
            <p className="mt-4 font-black font-nunito md:text-lg">
              Reasonable cost of
              <br /> products
            </p>
            <p className="mt-2 text-sm md:mt-3 md:text-base">
              Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
              scing elit. Ut{' '}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="block md:hidden">
        <div className="why-pagination"></div>
      </div>
    </>
  );
};

export default WhyRelyItemsMobile;
