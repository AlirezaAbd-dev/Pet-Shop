'use client';

import SvgDelete28 from '@/assets/svg/delete-red-28.svg';
import SvgDelete32 from '@/assets/svg/delete-red-32.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import useDeleteSavedProduct from '@/routes/(dashboard)/saved/components/modals/delete-saved-product.mutation';

import { useAdminEditProductStore } from '../admin-edit-product.store';
import useAdminDeleteProductMutation from '../queries/admin-delete-product.mutation';

const DeleteProductModal = () => {
  const isModalOpen = useAdminEditProductStore((s) => s.isDeleteProductOpen);
  const setIsModalOpen = useAdminEditProductStore(
    (s) => s.setIsDeleteProductOpen,
  );

  const { mutate, isPending } = useAdminDeleteProductMutation();

  return (
    <Dialog open={!!isModalOpen} onOpenChange={() => setIsModalOpen}>
      <DialogContent
        aria-describedby="delete saved products"
        className="w-[90%] md:max-w-[352px] bg-white p-4 flex flex-col items-center"
      >
        <Icon className="flex items-center justify-center w-[54px] h-[54px] md:w-[65px] md:h-[65px] rounded-xl bg-error-50 text-error-50">
          <SvgDelete28 className="md:hidden" />
          <SvgDelete32 className="md:block hidden" />
        </Icon>
        <p className="font-nunito font-black md:text-lg mt-4 text-center">
          Are you sure you want to delete product?
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
              if (isModalOpen) mutate();
            }}
            disabled={isPending}
            isLoading={isPending}
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

export default DeleteProductModal;
