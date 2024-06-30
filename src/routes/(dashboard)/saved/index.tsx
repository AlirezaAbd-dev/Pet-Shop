import Link from 'next/link';
import React from 'react';

import SvgHeartRed20 from '@/assets/svg/heart-red-20.svg';
import SvgHeartRed24 from '@/assets/svg/heart-red-24.svg';
import SvgLongArrow20 from '@/assets/svg/long-arrow-20.svg';
import Icon from '@/components/icon';

import SavedProductCard from './components/cards/saved-products-card.component';

const Saved = () => {
  return (
    <>
      <Link
        href={'/dashboard/main'}
        className="md:hidden flex gap-1 items-center "
      >
        <SvgLongArrow20 />
        Saved
      </Link>
      <section className="border border-nature-900 rounded-2xl mt-8 md:mt-0 py-4 md:py-6">
        <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 font-nunito font-bold md:text-xl">
          <Icon className="flex justify-center items-center w-9 h-9 md:w-[42px] md:h-[42px] rounded-lg bg-primary-50/5">
            <SvgHeartRed20 className="md:hidden" />
            <SvgHeartRed24 className="hidden md:block" />
          </Icon>
          Saved
        </div>

        <ul className="flex flex-col gap-5 px-4 md:px-6 mt-6 md:grid md:grid-cols-3 md:gap-4">
          <SavedProductCard />
          <SavedProductCard />
          <SavedProductCard />
          <SavedProductCard />
        </ul>
      </section>
    </>
  );
};

export default Saved;
