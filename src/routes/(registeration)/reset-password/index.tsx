'use client';

import { Suspense } from 'react';

import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';

import ResetPasswordForm from './reset-password.form';

const ResetPassword = () => {
  return (
    <main className="flex justify-center items-center min-h-screen px-5 md:p-24 py-7">
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

        <Suspense>
          <ResetPasswordForm />
        </Suspense>
      </section>
    </main>
  );
};

export default ResetPassword;
