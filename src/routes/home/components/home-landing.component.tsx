'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SvgCurvedArrowDesktop from '@/assets/svg/curved-arrow-desktop.svg';
import SvgCurvedArrowMobile from '@/assets/svg/curved-arrow-mobile.svg';
import SvgMiniPetDesktop from '@/assets/svg/mini-pet-desktop.svg';
import SvgMiniPetMobile from '@/assets/svg/mini-pet-mobile.svg';
import SvgPetFingersMobile from '@/assets/svg/pet-fingers-mobile.svg';
import Icon from '@/components/icon';
import ShopSpecifications from '@/components/shared/shop-specifications.component';
import { Button } from '@/components/ui/button';
import UseWindowSize from '@/hooks/use-window-size.hook';

const HomeLanding = () => {
  const router = useRouter();
  const { width } = UseWindowSize();

  return (
    <main className="px-5 md:px-20 pt-6 md:pt-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <div className="flex flex-col md:mt-16">
            <h1 className="font-nunito font-extrabold text-lg md:text-[44px] md:leading-[50px]">
              Welcome to{' '}
              <span className="font-black text-primary-500">
                USPET SUPPLIES{' '}
              </span>
              store.
            </h1>
            <div className="mt-3 md:mt-8 md:text-[40px] md:leading-10">
              We provide the{' '}
              <Icon>
                <SvgMiniPetMobile className="inline md:hidden -mt-2 md:mt-0 " />
                <SvgMiniPetDesktop className="hidden md:inline" />
              </Icon>{' '}
              best products {width && width > 1550 && <br />} for pets.
            </div>
            <div className="flex gap-7 md:gap-8 mt-1 md:mt-4">
              <Button
                onClick={() => {
                  router.push('/shop');
                }}
                className="mt-5 md:mt-4 font-black font-nunito md:text-xl w-[158px] md:w-[225px] h-12 md:h-16 gap-1 md:gap-2 shadow-color-md md:shadow-color-xl"
              >
                <Icon>
                  <SvgPetFingersMobile />
                </Icon>
                Show Store
              </Button>
              <Icon>
                <SvgCurvedArrowMobile className="md:hidden" />
                <SvgCurvedArrowDesktop className="hidden md:block" />
              </Icon>
            </div>
          </div>
          <Image
            src={'/static/landing-pet.webp'}
            alt="landing-image"
            width={662}
            height={531}
            className="mt-4 md:mt-0 w-[248px] h-[199px] md:w-[662px] md:h-[531px] z-10 self-center"
          />
        </div>
        <div className="bg-nature-600 rounded-3xl w-full -mt-[35px] md:-mt-[95px] md:rounded-tr-none mx-5 pt-9 pb-6 px-4 md:px-8 md:py-8">
          <p className="font-nunito font-black text-xl md:text-4xl">
            <span className="text-primary-500">Why </span>
            rely on us?
          </p>
          <ShopSpecifications className="mt-5 md:mt-8" />
        </div>
      </div>
    </main>
  );
};

export default HomeLanding;
