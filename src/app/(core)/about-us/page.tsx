import { Metadata } from 'next';
import React from 'react';

import AboutUs from '@/routes/about-us';

export const metadata: Metadata = {
  title: 'uspetinc - about us',
};

const page = () => {
  return <AboutUs />;
};

export default page;
