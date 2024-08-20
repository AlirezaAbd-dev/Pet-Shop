'use client';

import React from 'react';

import { useRegisterStore } from '../../_store/register.store';
import EmailVerification from './email-verification';
import Signup from './signup';

const SignupPages = () => {
  const page = useRegisterStore((s) => s.signupPage);

  if (page === 'signup') return <Signup />;
  if (page === 'enter-code') return <EmailVerification />;
};

export default SignupPages;
