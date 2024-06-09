import Image from 'next/image';
import React from 'react';

const TopSellingProductCard = () => {
  return (
    <div className="flex flex-col items-center rounded-xl md:rounded-3xl bg-[#FAFAFA] p-4 md:p-6 md:min-w-[285px]">
      <Image
        src={'/examples/product-image-1.png'}
        alt="product-1"
        width={124}
        height={209}
        className="w-[111px] h-[187px] md:w-[124] md:h-[209]"
      />
      <p className="mt-4 md:mt-6 font-nunito font-bold md:text-xl">
        Purina beneful perros
      </p>
      <p className="font-extrabold text-primary-500 md:text-xl md:mt-3">
        $120.00
      </p>
    </div>
  );
};

export default TopSellingProductCard;
