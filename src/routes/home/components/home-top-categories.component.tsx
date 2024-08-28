'use client';

import Link from 'next/link';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Product } from '@/app/(core)/product/[productId]/page';
import { Button } from '@/components/ui/button';

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
