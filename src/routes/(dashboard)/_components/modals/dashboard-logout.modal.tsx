import React from 'react';

import SvgLogout28 from '@/assets/svg/login-logout-red-28.svg';
import SvgLogout32 from '@/assets/svg/login-logout-red-32.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import useLogout from '../../_layouts/dashboard-sidebar/logout.mutation';
import { useDashboardModalsStore } from '../../_store/dashboard-modals.store';

const DashboardLogoutModal = () => {
  const { mutate, isPending } = useLogout();

  const isModalOpen = useDashboardModalsStore((s) => s.isLogoutModalOpen);
  const setIsModalOpen = useDashboardModalsStore((s) => s.setIsLogoutModalOpen);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent
        aria-describedby="logout"
        className="w-[90%] md:max-w-[352px] bg-white p-4 flex flex-col items-center"
      >
        <Icon className="flex items-center justify-center w-[54px] h-[54px] md:w-[65px] md:h-[65px] rounded-xl bg-error-50 text-error-50">
          <SvgLogout28 className="md:hidden" />
          <SvgLogout32 className="md:block hidden" />
        </Icon>
        <p className="font-nunito font-black md:text-lg mt-4">
          Are you logging out?
        </p>
        <div className="w-full flex gap-4 mt-6">
          <Button
            variant={'outline-gray'}
            onClick={() => setIsModalOpen(false)}
            className="w-full rounded-xl font-normal md:font-normal text-sm md:text-base md:h-11"
          >
            No
          </Button>
          <Button
            onClick={() => {
              mutate();
            }}
            isLoading={isPending}
            disabled={isPending}
            variant={isPending ? 'disabled' : 'default'}
            className="w-full rounded-xl text-sm md:text-base md:h-11"
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardLogoutModal;
