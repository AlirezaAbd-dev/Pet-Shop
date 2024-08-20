'use client';

import { Metadata } from 'next';

import { useRegisterStore } from '@/routes/(registeration)/_store/register.store';
import EmailVerification from '@/routes/(registeration)/email-verification';
import Signup from '@/routes/(registeration)/signup/pages/signup';

export const metadate: Metadata = {
  title: 'USpet - Signup',
};

const SignupPage = () => {
  const page = useRegisterStore((s) => s.signupPage);

  if (page === 'signup') return <Signup />;
  if (page === 'enter-code') return <EmailVerification />;
};

export default SignupPage;
