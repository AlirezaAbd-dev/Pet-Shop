import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
              <img
                src="/static/achievements/professional-vets.png"
                className="w-6 h-6 md:w-8 md:h-8 fill-white"
              />
            </div>
            <p className="mt-4 font-black font-nunito md:text-lg">
              Uncompromising quality assured
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-nature-600 rounded-xl p-4">
            <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#058441]">
              <img
                src="/static/achievements/protection.png"
                className="w-6 h-6 md:w-8 md:h-8 fill-white"
              />
            </div>
            <p className="mt-4 font-black font-nunito md:text-lg">
              Competitive prices, premium quality
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-nature-600 rounded-xl p-4">
            <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#2CC0FE]">
              <img
                src="/static/achievements/awards-win.png"
                className="w-6 h-6 md:w-8 md:h-8 fill-white"
              />
            </div>
            <p className="mt-4 font-black font-nunito md:text-lg">
              25+ years in pet supplies
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-nature-600 rounded-xl p-4">
            <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#FF8413]">
              <img
                src="/static/achievements/happy-clients.png"
                className="w-6 h-6 md:w-8 md:h-8 fill-white"
              />
            </div>
            <p className="mt-4 font-black font-nunito md:text-lg">
              Top-tier materials only
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
