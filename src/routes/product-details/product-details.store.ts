import { create } from 'zustand';

type UseProductDetailsStore = {
  isCommentModalOpen: boolean;
  setIsCommentModalOpen: (open: boolean) => void;
};

export const useProductDetailsStore = create<UseProductDetailsStore>()(
  (set) => ({
    isCommentModalOpen: false,
    setIsCommentModalOpen(open) {
      set({ isCommentModalOpen: open });
    },
  }),
);
