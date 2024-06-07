import Image from 'next/image';
import React from 'react';

import SvgOurPromise from '@/assets/svg/our-promise-to-you.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

const HomeOurPromise = () => {
  return (
    <div className="flex flex-col items-center mt-16 mx-5">
      <Icon>
        <SvgOurPromise />
      </Icon>
      <p className="mt-4 font-black font-nunito text-xl">
        Happy
        <span className="text-primary-500"> pets</span>, happy
        <span className="text-primary-500"> humans</span>
      </p>
      <p className="mx-2 text-sm text-center mt-3">
        Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
        elit. Ut Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
        scing elit. Ut
      </p>
      <Button className="mt-4 font-nunito font-black w-[225px] h-[48px]">
        Show more
      </Button>
      <Image
        src={'/static/our-promise-cat-and-dog.png'}
        alt="our-promise"
        width={277}
        height={261}
        className="mt-4"
      />
    </div>
  );
};

export default HomeOurPromise;
