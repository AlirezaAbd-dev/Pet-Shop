'use client';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import LoadingSpinner from '@/components/ui/loading-spinner';
import StandardProductCard from '@/routes/home/components/cards/standard-product-card.component';

import useRelatedProductsQuery from '../../queries/related-products.query';

const RelatedProducts = () => {
  const { data, isPending } = useRelatedProductsQuery();

  if (isPending) return <LoadingSpinner className="mx-auto mt-16 md:mt-24" />;

  if (!isPending && data) {
    const productSlides = data.map((item) => (
      <SwiperSlide key={item.id}>
        <StandardProductCard {...item} />
      </SwiperSlide>
    ));

    return (
      <section className="mt-16 md:mt-24">
        <h4 className="text-xl md:text-4xl font-nunito font-black text-center">
          Related products
        </h4>

        <Swiper
          className="hidden md:block mt-8 px-20"
          spaceBetween={24}
          slidesPerView={4}
        >
          {productSlides}
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
          {productSlides}
        </Swiper>
        <div className="block md:hidden">
          <div className="categories-pagination"></div>
        </div>
      </section>
    );
  }
};

export default RelatedProducts;
