import { Metadata } from 'next';
import { ReactNode } from 'react';

import AdminDashboardLayout from '@/routes/admin/_layout/admin-dashboard.layout';

export const metadata: Metadata = {
  title: 'uspetinc - panel admin',
};

const layout = (props: { children: ReactNode }) => {
  return <AdminDashboardLayout>{props.children}</AdminDashboardLayout>;
};

export default layout;
