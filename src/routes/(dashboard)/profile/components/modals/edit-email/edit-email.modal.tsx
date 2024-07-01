'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useDashboardModalsStore } from '@/routes/(dashboard)/_store/dashboard-modals.store';

import EnterCode from './enter-code.component';
import EnterEmail from './enter-email.component';

const EditEmailModal = () => {
  const modalMode = useDashboardModalsStore((s) => s.editEmailModalMode);
  const isModalOpen = useDashboardModalsStore((s) => s.isEditEmailModalOpen);
  const setIsModalOpen = useDashboardModalsStore(
    (s) => s.setIsEditEmailModalOpen,
  );
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent
        aria-describedby="change email"
        className="w-[90%] md:max-w-[458px] bg-white flex flex-col items-center p-0"
      >
        {modalMode === 'enter email' && <EnterEmail />}
        {modalMode === 'enter code' && <EnterCode />}
      </DialogContent>
    </Dialog>
  );
};

export default EditEmailModal;
