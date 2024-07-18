import { create } from 'zustand';

import { Brand, Category } from '@/app/(core)/shop/page';

type Filter = {
  brands: Brand[];
  categories: Category[];
};

type PriceFilter = { min: number; max: number };

type UseFilterStore = {
  filters: Filter;
  setFilters: (filter: Filter) => void;
  price: PriceFilter;
  setPrice: (price?: PriceFilter) => void;
  category: number[];
  setCategory: (category: number) => void;
  brand: number[];
  setBrand: (brand: number) => void;
  available: boolean;
  setAvailable: (available: boolean) => void;
  search: string;
  setSearch: (search: string) => void;
  sortBy?: string;
  setSortBy: (sortBy?: string) => void;

  resetFilter: () => void;
};

export const useFiltersStore = create<UseFilterStore>()((set, get) => ({
  filters: { brands: [], categories: [] },
  setFilters(filters) {
    set({ filters });
  },

  // interactive section
  resetFilter() {
    set({
      available: false,
      brand: [],
      category: [],
      price: { max: 1000, min: 1 },
      search: '',
      sortBy: undefined,
    });
  },

  price: { min: 1, max: 1000 },
  setPrice(price) {
    set({ price });
  },
  category: [],
  setCategory(category) {
    const categories = [...get().category];

    const categoryIndex = categories.findIndex((c) => c === category);

    if (categoryIndex === -1) {
      categories.push(category);
      return set({ category: categories });
    }

    categories.splice(categoryIndex, 1);
    set({ category: categories });
  },
  brand: [],
  setBrand(brand) {
    const brands = [...get().brand];

    const brandIndex = brands.findIndex((c) => c === brand);

    if (brandIndex === -1) {
      brands.push(brand);
      return set({ brand: brands });
    }

    brands.splice(brandIndex, 1);
    set({ brand: brands });
  },
  available: false,
  setAvailable(available) {
    set({ available });
  },
  search: '',
  setSearch(search) {
    set({ search });
  },
  setSortBy(sortBy) {
    if (!!get().sortBy && get().sortBy === sortBy) {
      return set({ sortBy: undefined });
    }
    set({ sortBy });
  },
}));
