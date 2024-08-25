import { create } from 'zustand';

import { SubCategory } from './queries/admin-sub-categories.query';

type UseAdminSubCategoriesStoreType = {
  isDeleteSubCategoryModeOpen?: string;
  setIsDeleteSubCategoryModeOpen: (open?: string) => void;
  subCategoryEditMode?: SubCategory;
  setSubCategoryEditMode: (subCategory?: SubCategory) => void;
};

export const useAdminSubCategoriesStore =
  create<UseAdminSubCategoriesStoreType>()((set) => ({
    setIsDeleteSubCategoryModeOpen(open) {
      set({ isDeleteSubCategoryModeOpen: open });
    },
    setSubCategoryEditMode(category) {
      set({ subCategoryEditMode: category });
    },
  }));
