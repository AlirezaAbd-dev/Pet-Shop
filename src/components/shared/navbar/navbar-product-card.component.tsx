import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import SvgWeight from '@/assets/svg/weight-gray-mobile.svg';
import Icon from '@/components/icon';
import Counter from '@/routes/product-details/components/product-wild-card/counter.component';

const NavbarProductCard = () => {
  const [counterValue, setCounterValue] = useState(1);

  return (
    <li className="w-full flex justify-between pb-5 md:pb-6 border-b border-nature-900">
      <div className="w-full flex gap-3 md:gap-4">
        <div className="flex justify-center items-center w-[53px] h-[53px] md:w-[83px] md:h-[83px] bg-nature-700 rounded-xl">
          <Image
            src={'/examples/product-image-1.png'}
            width={30}
            height={64}
            alt="product-image-1"
            className="w-[19px] h-[40px] md:w-[30px] md:h-[64px]"
          />
        </div>
        <div>
          <p className="font-nunito font-bold text-sm md:text-lg">
            Royal Canin Urinary
          </p>
          <Icon className="flex items-center gap-2 mt-2 text-sm md:text-base text-text-300">
            <SvgWeight />
            50KG
          </Icon>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-1 md:gap-2">
          <p className="font-bold text-sm md:text-lg">$89.12</p>
          <p className="line-through decoration-text-300 text-text-300 text-xs md:text-base">
            $89.12
          </p>
        </div>
        {/* counter */}
        <Counter
          value={counterValue}
          onChange={setCounterValue}
          minimum={1}
          onMinimumType="delete"
          maximum={10}
          size="sm"
        />
      </div>
    </li>
  );
};

export default NavbarProductCard;
