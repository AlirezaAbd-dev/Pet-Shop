'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EmailVerification = () => {
  const router = useRouter();

  return (
    <main className="flex justify-center items-center min-h-screen px-5 md:p-24">
      <section className="flex flex-col items-center md:w-[486px] md:border md:border-nature-800 md:rounded-2xl md:p-6">
        <Icon>
          <SvgLogoMobile className="md:hidden" />
          <SvgLogoDesktop className="hidden md:block" />
        </Icon>
        <h3 className="mt-6 md:mt-7 font-nunito font-extrabold md:text-2xl">
          Email verification
        </h3>
        <p className="mt-2 md:mt-3 text-sm md:text-base text-center leading-7 md:leading-8">
          Please enter the 4-digit verification code that was sent to
          milad138001@gmail.com
        </p>

        <form className="w-full flex flex-col mt-6 md:mt-8">
          <label className="text-sm md:text-base">
            Email verification code
          </label>
          <Input className="mt-2 md:mt-3" />
          <Button
            type="button"
            onClick={() => {
              router.push('/');
            }}
            className="font-bold text-sm md:text-base shadow-color-md rounded-xl mt-6 md:mt-8"
          >
            Confirm
          </Button>
        </form>
        <p className="w-full mt-4 md:mt-6 text-sm md:text-base text-center cursor-pointer">
          Resend the Code (02:00)
        </p>
        <p
          onClick={() => {
            router.back();
          }}
          className="w-full mt-4 md:mt-6 text-sm md:text-base text-center cursor-pointer"
        >
          Back
        </p>
      </section>
    </main>
  );
};

export default EmailVerification;
