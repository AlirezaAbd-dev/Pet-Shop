import React from 'react';

import SvgCurvedArrowMobile from '@/assets/svg/curved-arrow-mobile.svg';
import SvgMiniPetMobile from '@/assets/svg/mini-pet-mobile.svg';
import SvgPetFingersMobile from '@/assets/svg/pet-fingers-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

const HomeLanding = () => {
  return (
    <main className="px-5 pt-6">
      <h1 className="font-nunito font-extrabold text-2xl">
        Welcome to <span className="font-black text-primary-500">USPET </span>
        store.
      </h1>
      <div className="text-lg mt-3">
        We provide the{' '}
        <Icon>
          <SvgMiniPetMobile className="inline" />
        </Icon>{' '}
        best products for pets.
      </div>
      <div className="flex gap-6 mt-1">
        <Button className="mt-5 font-black w-[158px] h-12 gap-1">
          <Icon>
            <SvgPetFingersMobile />
          </Icon>
          Show Store
        </Button>
        <Icon>
          <SvgCurvedArrowMobile />
        </Icon>
      </div>
    </main>
  );
};

export default HomeLanding;
