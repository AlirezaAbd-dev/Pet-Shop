import { Metadata } from 'next';
import React from 'react';

import ResetPassword from '@/routes/(registeration)/reset-password';

export const metadata: Metadata = {
  title: 'uspetinc - reset password',
};
const page = () => {
  return <ResetPassword />;
};

export default page;
