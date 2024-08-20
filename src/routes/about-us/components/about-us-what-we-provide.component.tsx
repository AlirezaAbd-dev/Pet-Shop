'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';

const AboutUsWhatWeProvide = () => {
  const router = useRouter();

  return (
    <main className="px-5 md:px-20 mt-16 md:mt-24 flex flex-col md:flex-row gap-6">
      <section
        onClick={() => {
          router.push('/shop');
        }}
        className="bg-[#FF782B] h-[337px] md:h-[261px] rounded-lg md:rounded-2xl w-full overflow-hidden cursor-pointer"
      >
        <div className="relative h-full bg-about-us-paws-orange-mobile md:bg-about-us-paws-orange-desktop bg-cover">
          <div className="absolute bottom-0 md:right-0 w-full flex justify-center md:justify-end">
            <img
              src="/static/free-shipping-pets.png"
              alt="free shipping"
              className="w-[162px] md:w-[251px]"
            />
          </div>

          <div className="p-4 md:px-6 md:py-8">
            <p className="font-nunito font-black text-lg md:text-2xl text-white">
              Get Free Shipping on
              <br /> Orders Over $50
            </p>
            <p className="mt-2 md:mt-3 text-sm md:text-lg text-white leading-6 md:max-w-[360px]">
              Blandit maecenas vitae sollicitudin aenean hendrerit tortor nisi
              phasellus tincidunt
            </p>
            <Button
              variant={'secondary'}
              className="mt-4 rounded-[50px] h-[44px] w-[133px] font-semibold md:text-base"
            >
              Shop now
            </Button>
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          router.push('/shop');
        }}
        className="bg-[#774AD8] h-[337px] md:h-[261px] rounded-lg md:rounded-2xl w-full overflow-hidden cursor-pointer"
      >
        <div className="relative h-full bg-about-us-paws-orange-mobile md:bg-about-us-paws-orange-desktop bg-cover">
          <div className="absolute bottom-0 md:right-6 w-full flex justify-center md:justify-end">
            <img
              src="/static/buy-one-get-one.png"
              alt="free shipping"
              className="w-[145px] md:w-[195px]"
            />
          </div>
          <div className="p-4 md:px-6 md:py-8">
            <p className="font-nunito font-black text-lg md:text-2xl text-white">
              Buy One, Get One
              <br className="hidden md:block" /> 50% Off
            </p>
            <p className="mt-2 md:mt-3 text-sm md:text-lg text-white leading-6 md:max-w-[360px]">
              Blandit maecenas vitae sollicitudin aenean hendrerit tortor nisi
              phasellus tincidunt
            </p>
            <Button
              variant={'secondary'}
              className="mt-4 rounded-[50px] h-[44px] w-[133px] font-semibold md:text-base"
            >
              Shop now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsWhatWeProvide;
