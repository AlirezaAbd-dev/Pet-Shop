import { create } from 'zustand';

import { Category } from '@/app/(core)/shop/page';

type UseAdminCategoriesStoreType = {
  isDeleteCategorymodlOpen?: string;
  setIsDeleteCategorymodlOpen: (open?: string) => void;
  categoryEditMode?: Category;
  setCategoryEditMode: (category?: Category) => void;
};

export const useAdminCategoriesStore = create<UseAdminCategoriesStoreType>()(
  (set) => ({
    setIsDeleteCategorymodlOpen(open) {
      set({ isDeleteCategorymodlOpen: open });
    },
    setCategoryEditMode(category) {
      set({ categoryEditMode: category });
    },
  }),
);
