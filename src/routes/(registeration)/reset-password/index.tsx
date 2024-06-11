import React from 'react';

import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import SvgEyeDesktop from '@icons/eye-desktop.svg';
import SvgEye from '@icons/eye-mobile.svg';

const ResetPassword = () => {
  return (
    <main className="flex justify-center items-center min-h-screen px-5 md:p-24">
      <section className="flex flex-col items-center md:w-[486px] md:border md:border-nature-800 md:rounded-2xl md:p-6">
        <Icon>
          <SvgLogoMobile className="md:hidden" />
          <SvgLogoDesktop className="hidden md:block" />
        </Icon>
        <h3 className="mt-6 md:mt-7 font-nunito font-extrabold md:text-2xl">
          Reset your password
        </h3>
        <p className="mt-2 md:mt-3 text-sm md:text-base text-center">
          Enter your new password
        </p>

        <form className="w-full flex flex-col mt-6 md:mt-8">
          <label className="text-sm md:text-base mt-4">New password</label>
          <div className="flex items-center bg-nature-600 rounded-lg mt-2 md:mt-3 pr-3">
            <Input className="flex-1" />
            <Icon>
              <SvgEye className="md:hidden w-6 h-6" />
              <SvgEyeDesktop className="hidden md:block" />
            </Icon>
          </div>
          <p className="mt-4">Minimum 8 characters</p>
          <Button className="font-bold text-sm md:text-base shadow-color-md rounded-xl mt-6 md:mt-8">
            Reset password
          </Button>
        </form>
      </section>
    </main>
  );
};

export default ResetPassword;
