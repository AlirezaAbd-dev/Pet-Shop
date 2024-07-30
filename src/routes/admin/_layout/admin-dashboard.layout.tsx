'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';

import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import Icon from '@/components/icon';
import useProfileQuery from '@/hooks/react-query/queries/profile.query';
import { cn } from '@/lib/utils';

import { ADMIN_PAGES } from '../_constants/admin-pages.constants';

const AdminDashboardLayout = (props: { children: ReactNode }) => {
  const router = useRouter();
  const { data, isPending } = useProfileQuery('/panel/login');
  const pathname = usePathname();

  useEffect(() => {
    if (!isPending && data && data.data.role !== 'admin') {
      router.replace('/panel/login');
    }
  }, [data, isPending]);

  return (
    <main className="flex">
      <section className="min-h-screen w-[336px] flex flex-col items-center border-r border-nature-800 px-6">
        <Icon className="mt-12">
          <SvgLogoDesktop />
        </Icon>
        <ul className="flex flex-col items-center gap-6 mt-14 w-full">
          {ADMIN_PAGES.map((item) => (
            <li
              key={item.path}
              className={cn(
                'w-full pl-3 cursor-pointer',
                pathname.startsWith(item.path)
                  ? 'font-bold py-3 px-4 text-white bg-secondary-500 rounded-xl'
                  : '',
              )}
              onClick={() => {
                router.push(item.path);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full bg-nature-100 p-6 flex flex-col">
        <div className="w-full h-[100px] flex items-center bg-white border border-nature-800 rounded-2xl">
          <span className="w-[5px] h-[51px] bg-primary-600"></span>
          <p className="pl-4 font-extrabold text-xl text-primary-600">
            Admin panel
          </p>
        </div>
        {props.children}
      </section>
    </main>
  );
};

export default AdminDashboardLayout;
