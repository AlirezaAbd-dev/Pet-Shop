import { create } from 'zustand';

import { Pet } from '@/routes/home';

type UseAdminCategoriesStoreType = {
  isDeletePetModalOpen?: string;
  setIsDeletePetModalOpen: (open?: string) => void;
  petEditMode?: Pet;
  setPetEditMode: (pet?: Pet) => void;
};

export const useAdminPetsStore = create<UseAdminCategoriesStoreType>()(
  (set) => ({
    setIsDeletePetModalOpen(open) {
      set({ isDeletePetModalOpen: open });
    },
    setPetEditMode(pet) {
      set({ petEditMode: pet });
    },
  }),
);
