import { create } from 'zustand';

type EditEmailModeType = 'enter email' | 'enter code';

type UseDashboardModalsStoreType = {
  isLogoutModalOpen: boolean;
  setIsLogoutModalOpen: (open: boolean) => void;
  isDeleteSavedProductModalOpen: boolean;
  setIsDeleteSavedProductModalOpen: (open: boolean) => void;

  //   edit email
  editEmailModalMode: EditEmailModeType;
  setEditEmailModalMode: (mode: EditEmailModeType) => void;
  isEditEmailModalOpen: boolean;
  setIsEditEmailModalOpen: (open: boolean) => void;

  //   change password
  isChangePasswordModalOpen: boolean;
  setIsChangePasswordModalOpen: (open: boolean) => void;
};

export const useDashboardModalsStore = create<UseDashboardModalsStoreType>()(
  (set) => ({
    isLogoutModalOpen: false,
    setIsLogoutModalOpen(open) {
      set({ isLogoutModalOpen: open });
    },
    isDeleteSavedProductModalOpen: false,
    setIsDeleteSavedProductModalOpen(open) {
      set({ isDeleteSavedProductModalOpen: open });
    },

    // edit email
    editEmailModalMode: 'enter email',
    setEditEmailModalMode(mode) {
      set({ editEmailModalMode: mode });
    },
    isEditEmailModalOpen: false,
    setIsEditEmailModalOpen(open) {
      set({ isEditEmailModalOpen: open });
    },

    // change password
    isChangePasswordModalOpen: false,
    setIsChangePasswordModalOpen(open) {
      set({ isChangePasswordModalOpen: open });
    },
  }),
);
