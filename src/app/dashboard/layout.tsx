'use client';

import { ReactNode } from 'react';

import Navbar from '@/components/shared/navbar/navbar.component';
import DashboardSidebarLayout from '@/routes/(dashboard)/_layouts/dashboard-sidebar.layout';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="md:grid md:grid-cols-12 md:gap-6 md:mt-8 mt-6 md:pb-6 px-5 md:px-20">
        <div className="col-span-3 hidden md:flex md:flex-col">
          <DashboardSidebarLayout />
        </div>
        <div className="col-span-9 mb-6">{children}</div>
      </div>
    </>
  );
};

export default layout;
