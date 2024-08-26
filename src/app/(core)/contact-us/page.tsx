import { Metadata } from 'next';
import React from 'react';

import ContactUs from '@/routes/contact-us';

export const metadata: Metadata = {
  title: 'uspetinc - contact us',
};

const page = () => {
  return <ContactUs />;
};

export default page;
