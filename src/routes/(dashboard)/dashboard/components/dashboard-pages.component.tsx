'use client';

import Link from 'next/link';
import React from 'react';

import SvgArrowGray20 from '@/assets/svg/Arrow-gray-20.svg';
import SvgLogoutRed20 from '@/assets/svg/login-logout-red-20.svg';

import { DASHBOARD_ROUTES_MINI } from '../../_constants/dashboard-routes.constants';
import { useDashboardModalsStore } from '../../_store/dashboard-modals.store';

const DashboardPages = () => {
  const setIsLogoutModalOpen = useDashboardModalsStore(
    (s) => s.setIsLogoutModalOpen,
  );
  return (
    <section className="mt-5 md:hidden">
      <ul>
        {DASHBOARD_ROUTES_MINI.map((item) => (
          <Link key={item.name} href={item.link}>
            <li className="flex justify-between items-center py-3 border-b border-nature-800">
              <div className="flex items-center gap-2">
                <item.icon />
                <p className="text-sm text-text-400">{item.name}</p>
              </div>
              <SvgArrowGray20 />
            </li>
          </Link>
        ))}
        <li
          className="flex justify-between items-center py-3"
          onClick={() => setIsLogoutModalOpen(true)}
        >
          <div className="flex items-center gap-2">
            <SvgLogoutRed20 />
            <p className="text-sm text-error-500">Logout</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default DashboardPages;
