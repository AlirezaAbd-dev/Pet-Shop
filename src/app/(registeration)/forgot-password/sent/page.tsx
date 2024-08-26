import { Metadata } from 'next';
import React from 'react';

import ForgotPasswordSent from '@/routes/(registeration)/forgot-password-sent';

export const metadata: Metadata = {
  title: 'uspetinc - Forgot password',
};
const page = () => {
  return <ForgotPasswordSent />;
};

export default page;
