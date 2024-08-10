import { create } from 'zustand';

type UseAdminEditProductStoreType = {
  isDeleteProductOpen: boolean;
  setIsDeleteProductOpen: (open: boolean) => void;
};

export const useAdminEditProductStore = create<UseAdminEditProductStoreType>()(
  (set) => ({
    isDeleteProductOpen: false,
    setIsDeleteProductOpen(open) {
      set({ isDeleteProductOpen: open });
    },
  }),
);
