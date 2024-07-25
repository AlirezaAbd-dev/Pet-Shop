import React, { ReactNode } from 'react';

import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import Icon from '@/components/icon';
import AdminDashboardLayout from '@/routes/admin/_layout/admin-dashboard.layout';

const layout = (props: { children: ReactNode }) => {
  return <AdminDashboardLayout>{props.children}</AdminDashboardLayout>;
};

export default layout;
