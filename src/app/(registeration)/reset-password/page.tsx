import { Metadata } from 'next';
import React from 'react';

import ResetPassword from '@/routes/(registeration)/reset-password';

export const metadate: Metadata = {
  title: 'USpet - reset password',
};
const page = () => {
  return <ResetPassword />;
};

export default page;
