import { create } from 'zustand';

import { Brand, Category } from '@/app/(core)/shop/page';
import { SubCategory } from '@/routes/admin/sub-categories/queries/admin-sub-categories.query';
import { Pet } from '@/routes/home';

type Filter = {
  brands: Brand[];
  categories: Category[];
  pets: Pet[];
  subCategories: SubCategory[];
};

type PriceFilter = { min: number; max: number };

type UseFilterStore = {
  filters: Filter;
  setFilters: (filter: Filter) => void;
  price: PriceFilter;
  setPrice: (price?: PriceFilter) => void;
  category: number[];
  setCategory: (category: number) => void;
  subCategory: number[];
  setSubCategory: (subCategory: number) => void;
  fillInstantSubCategories: (subCategory: number[]) => void;
  clearInstantSubCategories: (subCategory: number[]) => void;
  pet: number[];
  setPet: (pet: number) => void;
  brand: number[];
  setBrand: (brand: number) => void;
  available: boolean;
  setAvailable: (available: boolean) => void;
  discounted: boolean;
  setDiscounted: (available: boolean) => void;
  promotion: boolean;
  setPromotion: (available: boolean) => void;
  search: string;
  setSearch: (search: string) => void;
  sortBy?: string;
  setSortBy: (sortBy?: string) => void;
  resetFilter: () => void;
};

export const useFiltersStore = create<UseFilterStore>()((set, get) => ({
  filters: { brands: [], categories: [], pets: [], subCategories: [] },
  setFilters(filters) {
    set({ filters });
  },

  // interactive section
  resetFilter() {
    set({
      available: false,
      discounted: false,
      promotion: false,
      brand: [],
      category: [],
      pet: [],
      subCategory: [],
      price: { max: 10000, min: 1 },
      search: '',
      sortBy: undefined,
    });
  },

  price: { min: 1, max: 10000 },
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
  subCategory: [],
  setSubCategory(subCategory) {
    const subCategories = [...get().subCategory];

    const subCategoryIndex = subCategories.findIndex((c) => c === subCategory);

    if (subCategoryIndex === -1) {
      subCategories.push(subCategory);
      return set({ subCategory: subCategories });
    }

    subCategories.splice(subCategoryIndex, 1);
    set({ subCategory: subCategories });
  },
  fillInstantSubCategories(subCategory) {
    const subCategories = [...get().subCategory];

    subCategory.forEach((s) => {
      if (!subCategories.includes(s)) subCategories.push(s);
    });

    set({ subCategory: subCategories });
  },
  clearInstantSubCategories(subCategory) {
    const subCategories = [...get().subCategory];

    subCategory.forEach((s) => {
      const findIndex = subCategories.findIndex((item) => item === s);

      if (findIndex !== -1) {
        subCategories.splice(findIndex, 1);
      }
    });

    set({ subCategory: subCategories });
  },
  pet: [],
  setPet(pet) {
    const pets = [...get().pet];

    const petIndex = pets.findIndex((c) => c === pet);

    if (petIndex === -1) {
      pets.push(pet);
      return set({ pet: pets });
    }

    pets.splice(petIndex, 1);
    set({ pet: pets });
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
  discounted: false,
  setDiscounted(discounted) {
    set({ discounted });
  },
  promotion: false,
  setPromotion(promotion) {
    set({ promotion });
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
