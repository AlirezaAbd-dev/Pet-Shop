'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import convertSecondsToMinutes from '@/lib/utils/convertSecondsToMinutes';

import { useRegisterStore } from '../_store/register.store';
import useForgotPasswordMutation from '../forgot-password/forgot-password.mutation';

const ForgotPasswordSent = () => {
  const router = useRouter();

  const [timer, setTimer] = useState(120);
  const email = useRegisterStore((s) => s.signupEmail);

  const { mutate, isPending, isSuccess } = useForgotPasswordMutation();

  useEffect(() => {
    if (!email) {
      router.replace('/forgot-password');
    }
  }, [email]);

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

  const onResendLink = () => {
    if (email && !isPending) mutate({ email });
  };

  return (
    <main className="flex justify-center items-center min-h-screen px-5 md:p-24 py-7">
      <section className="flex flex-col items-center md:w-[486px] md:border md:border-nature-800 md:rounded-2xl md:p-6">
        <Icon>
          <SvgLogoMobile className="md:hidden" />
          <SvgLogoDesktop className="hidden md:block" />
        </Icon>
        <h3 className="mt-6 md:mt-7 font-nunito font-extrabold md:text-2xl">
          The message was sent successfully
        </h3>
        <p className="mt-2 md:mt-3 text-sm md:text-base text-center">
          A password change message has been sent to your email. Check your
          email
        </p>

        <Link href="/login" className="w-full">
          <Button className="w-full font-bold text-sm md:text-base shadow-color-md rounded-xl mt-6 md:mt-8">
            Back to sign in
          </Button>
        </Link>
        <p
          onClick={onResendLink}
          className={cn(
            'w-full mt-4 md:mt-6 text-sm md:text-base text-center cursor-pointer',
            isPending ? 'animate-pulse' : '',
          )}
        >
          Resend the message{' '}
          {!!timer && '(' + convertSecondsToMinutes(timer) + ')'}
        </p>
      </section>
    </main>
  );
};

export default ForgotPasswordSent;
