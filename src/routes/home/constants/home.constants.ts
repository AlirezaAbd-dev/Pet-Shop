import SvgCat1Active from '@/assets/svg/cat-1-white.svg';
import SvgCat1 from '@/assets/svg/cat-1.svg';
import SvgDogAndCatInHotelActive from '@/assets/svg/dog-and-cat-in-pet-hotel1-white.svg';
import SvgDogAndCatInHotel from '@/assets/svg/dog-and-cat-in-pet-hotel1.svg';
import SvgDogThinActive from '@/assets/svg/dog-thin-white.svg';
import SvgDogThin from '@/assets/svg/dog-thin.svg';

export const CATEGORIES_LIST = [
  {
    name: 'All',
    icon: SvgDogAndCatInHotel,
    activeIcon: SvgDogAndCatInHotelActive,
  },
  {
    name: 'Dog',
    icon: SvgDogThin,
    activeIcon: SvgDogThinActive,
  },
  {
    name: 'Cat',
    icon: SvgCat1,
    activeIcon: SvgCat1Active,
  },
] as const;
export type CategoiesListType = (typeof CATEGORIES_LIST)[number]['name'];
