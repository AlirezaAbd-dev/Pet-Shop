import { Metadata } from 'next';
import React from 'react';

import AdminLogin from '@/routes/admin/login';

export const metadata: Metadata = {
  title: 'uspetinc - panel login',
};

const page = () => {
  return <AdminLogin />;
};

export default page;
