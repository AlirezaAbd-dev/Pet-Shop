import { Metadata } from 'next';
import React from 'react';

import EmailVerification from '@/routes/(registeration)/email-verification';

export const metadata: Metadata = {
  title: 'USpet - Email verification',
};

const page = () => {
  return <EmailVerification />;
};

export default page;
