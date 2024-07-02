import { X } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDashboardModalsStore } from '@/routes/(dashboard)/_store/dashboard-modals.store';

const EnterEmail = () => {
  const modalMode = useDashboardModalsStore((s) => s.editEmailModalMode);
  const setModalMode = useDashboardModalsStore((s) => s.setEditEmailModalMode);
  const isModalOpen = useDashboardModalsStore((s) => s.isEditEmailModalOpen);
  const setIsModalOpen = useDashboardModalsStore(
    (s) => s.setIsEditEmailModalOpen,
  );
  return (
    <>
      <div className="w-full flex justify-between items-center bg-nature-800 p-4 rounded-t-2xl">
        <p className="font-nunito font-bold">Edit email</p>
        <X
          className="text-secondary-300 w-[16px] h-[16px] md:w-[20px] md:h-[20px] cursor-pointer"
          onClick={() => {
            setModalMode('enter email');
            setIsModalOpen(false);
          }}
        />
      </div>
      <div className="w-full px-3 md:px-4 py-4">
        <label className="text-sm md:text-base">Email</label>
        <Input className="mt-3" value={'milad@gmail.com'} />
        <Button
          onClick={() => setModalMode('enter code')}
          className="mt-6 w-full rounded-lg text-sm font-bold md:h-11 md:text-base"
        >
          Confirmation
        </Button>
      </div>
    </>
  );
};

export default EnterEmail;
