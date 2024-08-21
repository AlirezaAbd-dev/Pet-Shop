'use client';

import { useEffect, useState } from 'react';

import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';
import { cn } from '@/lib/utils';
import convertSecondsToMinutes from '@/lib/utils/convertSecondsToMinutes';
import { useRegisterStore } from '@/routes/(registeration)/_store/register.store';

import EmailVerificationForm from './email-verification.form';
import useResendCode from './resend-code.mutation';

const EmailVerification = () => {
  const [timer, setTimer] = useState(120);

  const email = useRegisterStore((s) => s.signupEmail);
  const setSignupPage = useRegisterStore((s) => s.setSignupPage);

  const { mutate, isPending, isSuccess } = useResendCode();

  useEffect(() => {
    if (!isPending && isSuccess) {
      setTimer(120);
    }
  }, [isPending, isSuccess]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

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
          Please enter the 5-digit verification code that was sent to {email}
        </p>

        <EmailVerificationForm />

        <p
          className={cn(
            'w-full mt-4 md:mt-6 text-sm md:text-base text-center cursor-pointer',
            isPending ? 'animate-pulse' : '',
          )}
          onClick={() => {
            if (timer === 0 && email && !isPending) {
              mutate({ email });
            }
          }}
        >
          Resend the Code{' '}
          {!!timer && '(' + convertSecondsToMinutes(timer) + ')'}
        </p>
        <p
          onClick={() => {
            setSignupPage('signup');
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
