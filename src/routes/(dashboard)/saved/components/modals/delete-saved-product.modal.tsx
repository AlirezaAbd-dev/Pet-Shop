'use client';

import React from 'react';

import SvgDelete28 from '@/assets/svg/delete-red-28.svg';
import SvgDelete32 from '@/assets/svg/delete-red-32.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useDashboardModalsStore } from '@/routes/(dashboard)/_store/dashboard-modals.store';

const DeleteSavedProductModal = () => {
  const isModalOpen = useDashboardModalsStore(
    (s) => s.isDeleteSavedProductModalOpen,
  );
  const setIsModalOpen = useDashboardModalsStore(
    (s) => s.setIsDeleteSavedProductModalOpen,
  );

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="w-[90%] md:max-w-[352px] bg-white p-4 flex flex-col items-center">
        <Icon className="flex items-center justify-center w-[54px] h-[54px] md:w-[65px] md:h-[65px] rounded-xl bg-error-50 text-error-50">
          <SvgDelete28 className="md:hidden" />
          <SvgDelete32 className="md:block hidden" />
        </Icon>
        <p className="font-nunito font-black md:text-lg mt-4">
          Are you deleting the product?
        </p>
        <div className="w-full flex gap-4 mt-6">
          <Button
            variant={'outline-gray'}
            onClick={() => setIsModalOpen(false)}
            className="w-full rounded-xl font-normal md:font-normal text-sm md:text-base md:h-11"
          >
            No
          </Button>
          <Button className="w-full rounded-xl text-sm md:text-base md:h-11">
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteSavedProductModal;
