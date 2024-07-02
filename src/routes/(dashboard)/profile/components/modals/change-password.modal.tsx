'use client';

import { X } from 'lucide-react';

import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useDashboardModalsStore } from '@/routes/(dashboard)/_store/dashboard-modals.store';

import SvgCheckmarkCircle from '@icons/checkmark-circle-10.svg';
import SvgEyeDesktop from '@icons/eye-desktop.svg';
import SvgEye from '@icons/eye-mobile.svg';

const ChangePasswordModal = () => {
  const isModalOpen = useDashboardModalsStore(
    (s) => s.isChangePasswordModalOpen,
  );
  const setIsModalOpen = useDashboardModalsStore(
    (s) => s.setIsChangePasswordModalOpen,
  );
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent
        aria-describedby="change password"
        className="w-[90%] md:max-w-[458px] bg-white flex flex-col items-center p-0"
      >
        <div className="w-full flex justify-between items-center bg-nature-800 p-4 rounded-t-2xl">
          <p className="font-nunito font-bold">Edit password</p>
          <X
            className="text-secondary-300 w-[16px] h-[16px] md:w-[20px] md:h-[20px] cursor-pointer"
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
        </div>
        <div className="w-full px-3 md:px-4 py-4">
          <p className="text-sm md:text-base">Current password*</p>
          <div className="flex items-center bg-nature-600 rounded-lg mt-3 pr-3">
            <Input />
            <Icon>
              <SvgEye className="md:hidden w-6 h-6" />
              <SvgEyeDesktop className="hidden md:block" />
            </Icon>
          </div>

          <p className="text-sm md:text-base mt-5 md:mt-6">New password*</p>
          <div className="flex items-center bg-nature-600 rounded-lg mt-3 pr-3">
            <Input />
            <Icon>
              <SvgEye className="md:hidden w-6 h-6" />
              <SvgEyeDesktop className="hidden md:block" />
            </Icon>
          </div>

          <div className="flex items-center gap-2 mt-4 text-sm">
            <Icon>
              <SvgCheckmarkCircle />
            </Icon>
            At least 8 characters
          </div>
          <div className="flex items-center gap-2 mt-3 text-sm">
            <Icon>
              <SvgCheckmarkCircle />
            </Icon>
            Letters and numbers
          </div>

          <Button className="mt-6 w-full rounded-lg text-sm font-bold md:h-11 md:text-base">
            Confirmation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
