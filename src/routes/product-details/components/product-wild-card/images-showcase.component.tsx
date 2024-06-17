'use client';

import Image from 'next/image';
import React from 'react';

const ImagesShowcase = () => {
  return (
    <section className="flex gap-4 md:gap-14">
      <ul className="flex flex-col gap-2 md:gap-6">
        <li className="flex justify-center items-center w-[68px] h-[56px] md:w-[110px] md:h-[111px] rounded-lg border border-primary-500">
          <Image
            src={'/examples/single-product-image-1.png'}
            alt="example"
            width={39}
            height={85}
            className="w-[19px] h-[41px] md:w-[39px] md:h-[85px]"
          />
        </li>
        <li className="flex justify-center items-center w-[68px] h-[56px] md:w-[110px] md:h-[111px] rounded-lg border border-nature-900">
          <Image
            src={'/examples/single-product-image-1.png'}
            alt="example"
            width={39}
            height={85}
            className="w-[19px] h-[41px] md:w-[39px] md:h-[85px]"
          />
        </li>
        <li className="flex justify-center items-center w-[68px] h-[56px] md:w-[110px] md:h-[111px] rounded-lg border border-nature-900">
          <Image
            src={'/examples/single-product-image-1.png'}
            alt="example"
            width={39}
            height={85}
            className="w-[19px] h-[41px] md:w-[39px] md:h-[85px]"
          />
        </li>
        <li className="flex justify-center items-center w-[68px] h-[56px] md:w-[110px] md:h-[111px] rounded-lg border border-nature-900">
          <Image
            src={'/examples/single-product-image-1.png'}
            alt="example"
            width={39}
            height={85}
            className="w-[19px] h-[41px] md:w-[39px] md:h-[85px]"
          />
        </li>
      </ul>
      <div className="md:relative flex justify-center items-center w-full md:h-[600px] md:w-[474px] bg-nature-600 rounded-2xl">
        <Image
          src={'/examples/single-product-image-1.png'}
          alt="example"
          width={224}
          height={488}
          className="w-[92px] h-[200px] md:w-[224px] md:h-[488px]"
        />
      </div>
    </section>
  );
};

export default ImagesShowcase;
