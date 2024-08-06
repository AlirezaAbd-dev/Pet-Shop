'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import SvgLogout from '@/assets/svg/login-logout-red-20.svg';
import SvgPenEditDesktop from '@/assets/svg/pen-edit-desktop.svg';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth.store';

import { DASHBOARD_ROUTES } from '../../_constants/dashboard-routes.constants';
import { useDashboardModalsStore } from '../../_store/dashboard-modals.store';

const DashboardSidebarLayout = () => {
  const router = useRouter();
  const pathname = usePathname();
  const profile = useAuthStore((s) => s.profile);

  const setIsLogoutModalOpen = useDashboardModalsStore(
    (s) => s.setIsLogoutModalOpen,
  );

  return (
    <section className="flex flex-col justify-between rounded-2xl min-h-[750px] border border-nature-900 py-6">
      <div>
        <div className="flex justify-between items-center px-6">
          <div>
            <p className="font-nunito font-bold text-lg">
              {profile?.full_name}
            </p>
            <p className="mt-2">{profile?.email}</p>
          </div>
          <SvgPenEditDesktop
            className="cursor-pointer"
            onClick={() => {
              router.push('/dashboard/profile');
            }}
          />
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
