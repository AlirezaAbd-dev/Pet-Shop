'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SvgLogout from '@/assets/svg/login-logout-red-20.svg';
import SvgPenEditDesktop from '@/assets/svg/pen-edit-desktop.svg';
import { cn } from '@/lib/utils';

import { DASHBOARD_ROUTES } from '../../_constants/dashboard-routes.constants';
import { useDashboardModalsStore } from '../../_store/dashboard-modals.store';

const DashboardSidebarLayout = () => {
  const pathname = usePathname();

  const setIsLogoutModalOpen = useDashboardModalsStore(
    (s) => s.setIsLogoutModalOpen,
  );

  return (
    <section className="flex flex-col justify-between rounded-2xl min-h-[750px] border border-nature-900 py-6">
      <div>
        <div className="flex justify-between items-center px-6">
          <div>
            <p className="font-nunito font-bold text-lg">Milad saeedi</p>
            <p className="mt-2">milad138001@gmail.com</p>
          </div>
          <SvgPenEditDesktop />
        </div>
        <div className="mt-6 w-full border-t border-nature-800"></div>

        <ul className="flex flex-col gap-6 mt-6">
          {DASHBOARD_ROUTES.map((item) => (
            <Link key={item.name} href={item.link}>
              <li
                className={cn(
                  'flex items-center gap-2 px-6',
                  pathname.startsWith(item.link)
                    ? 'text-primary-500 font-bold py-[7px] dashboard-active'
                    : '',
                )}
              >
                {pathname.startsWith(item.link) ? (
                  <item.activeIcon />
                ) : (
                  <item.icon />
                )}

                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div
        className={'flex items-center gap-2 px-6 text-error-500 cursor-pointer'}
        onClick={() => setIsLogoutModalOpen(true)}
      >
        <SvgLogout />
        Logout
      </div>
    </section>
  );
};

export default DashboardSidebarLayout;
