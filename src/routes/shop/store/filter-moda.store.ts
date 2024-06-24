import { create } from 'zustand';

type UseFilterModalStore = {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
};

export const useFilterModalStore = create<UseFilterModalStore>()((set) => ({
  isModalOpen: false,
  setIsModalOpen(open) {
    set({ isModalOpen: open });
  },
}));
