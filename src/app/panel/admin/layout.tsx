import { ReactNode } from 'react';

import AdminDashboardLayout from '@/routes/admin/_layout/admin-dashboard.layout';

const layout = (props: { children: ReactNode }) => {
  return <AdminDashboardLayout>{props.children}</AdminDashboardLayout>;
};

export default layout;
