import { Metadata } from 'next';
import React from 'react';

import ForgotPasswordSent from '@/routes/(registeration)/forgot-password-sent';

export const metadate: Metadata = {
  title: 'USpet - Forgot password',
};
const page = () => {
  return <ForgotPasswordSent />;
};

export default page;
