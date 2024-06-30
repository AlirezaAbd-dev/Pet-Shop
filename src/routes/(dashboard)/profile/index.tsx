import Link from 'next/link';
import React from 'react';

import SvgLongArrow20 from '@/assets/svg/long-arrow-20.svg';
import SvgSingleUserRed20 from '@/assets/svg/single-user-red-20.svg';
import SvgSingleUserRed24 from '@/assets/svg/single-user-red-24.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Profile = () => {
  return (
    <>
      <Link
        href={'/dashboard/main'}
        className="md:hidden flex gap-1 items-center "
      >
        <SvgLongArrow20 />
        Profile
      </Link>
      <section className="border border-nature-900 rounded-2xl mt-8 md:mt-0 py-4 md:py-6">
        <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 font-nunito font-bold md:text-xl">
          <Icon className="flex justify-center items-center w-9 h-9 md:w-[42px] md:h-[42px] rounded-lg bg-primary-50/5">
            <SvgSingleUserRed20 className="md:hidden" />
            <SvgSingleUserRed24 className="hidden md:block" />
          </Icon>
          Saved
        </div>
        <div className="flex items-center gap-2 px-4 md:px-6 mt-6">
          <span className="w-[9px] h-[9px] bg-primary-500 rounded-[50px]" />
          <p className="font-nunito font-bold text-sm md:text-lg">
            Profile information
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 mt-6 px-4 gap-5 md:px-6">
          <div>
            <label className="text-sm md:text-base">Full name</label>
            <Input className="mt-3" value={'Milad Saeedi'} />
          </div>
          <div>
            <label className="text-sm md:text-base">Email</label>
            <Input className="mt-3" value={'milad138001@gmail.com'} />
          </div>
          <div>
            <label className="text-sm md:text-base">Phone</label>
            <Input className="mt-3" value={'09304673884'} />
          </div>
          <div>
            <label className="text-sm md:text-base">Password</label>
            <Input className="mt-3" value={'********'} />
          </div>
        </div>
        <div className="mt-6 md:mt-8 border-b border-nature-900 mx-4 md:mx-6"></div>

        <div className="flex items-center gap-2 px-4 md:px-6 mt-6 md:mt-8">
          <span className="w-[9px] h-[9px] bg-primary-500 rounded-[50px]" />
          <p className="font-nunito font-bold text-sm md:text-lg">
            Address information
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8  mt-6 px-4 gap-5 md:px-6">
          <div>
            <label className="text-sm md:text-base">Country / Region</label>
            <Input className="mt-3" value={'Milad Saeedi'} />
          </div>
          <div>
            <label className="text-sm md:text-base">County</label>
            <Input className="mt-3" value={'milad138001@gmail.com'} />
          </div>
          <div>
            <label className="text-sm md:text-base">Street address</label>
            <Input className="mt-3" value={'09304673884'} />
          </div>
          <div>
            <label className="text-sm md:text-base">Town / City</label>
            <Input className="mt-3" value={'********'} />
          </div>
          <div>
            <label className="text-sm md:text-base">Postcode</label>
            <Input className="mt-3" value={'********'} />
          </div>
        </div>

        <div className="px-4 md:px-6 mt-6 md:mt-10">
          <Button className="w-full md:w-[232px] rounded-xl font-bold text-sm md:text-base">
            Confirmation
          </Button>
        </div>
      </section>
    </>
  );
};

export default Profile;
