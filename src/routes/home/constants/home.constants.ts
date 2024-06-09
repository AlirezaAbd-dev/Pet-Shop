import SvgCat1ActiveDesktop from '@/assets/svg/cat-1-desktop-white.svg';
import SvgCat1Desktop from '@/assets/svg/cat-1-desktop.svg';
import SvgCat1Active from '@/assets/svg/cat-1-white.svg';
import SvgCat1 from '@/assets/svg/cat-1.svg';
import SvgDogAndCatInHotelActiveDesktop from '@/assets/svg/dog-and-cat-in-pet-hotel1-desktop-white.svg';
import SvgDogAndCatInHotelDesktop from '@/assets/svg/dog-and-cat-in-pet-hotel1-desktop.svg';
import SvgDogAndCatInHotelActive from '@/assets/svg/dog-and-cat-in-pet-hotel1-white.svg';
import SvgDogAndCatInHotel from '@/assets/svg/dog-and-cat-in-pet-hotel1.svg';
import SvgDogThinActiveDesktop from '@/assets/svg/dog-thin-desktop-white.svg';
import SvgDogThinDesktop from '@/assets/svg/dog-thin-desktop.svg';
import SvgDogThinActive from '@/assets/svg/dog-thin-white.svg';
import SvgDogThin from '@/assets/svg/dog-thin.svg';

export const CATEGORIES_LIST = [
  {
    name: 'All',
    icon: SvgDogAndCatInHotel,
    activeIcon: SvgDogAndCatInHotelActive,
    desktopIcon: SvgDogAndCatInHotelDesktop,
    activeDesktopIcon: SvgDogAndCatInHotelActiveDesktop,
  },
  {
    name: 'Dog',
    icon: SvgDogThin,
    activeIcon: SvgDogThinActive,
    desktopIcon: SvgDogThinDesktop,
    activeDesktopIcon: SvgDogThinActiveDesktop,
  },
  {
    name: 'Cat',
    icon: SvgCat1,
    activeIcon: SvgCat1Active,
    desktopIcon: SvgCat1Desktop,
    activeDesktopIcon: SvgCat1ActiveDesktop,
  },
] as const;
export type CategoiesListType = (typeof CATEGORIES_LIST)[number]['name'];

export const BRANDS_LIST = [
  {
    url: 'happy-dog.png',
  },
  {
    url: 'josera.png',
  },
  {
    url: 'the-honnest-kitchen.png',
  },
  {
    url: 'purina-pro-plan.png',
  },
  {
    url: 'top-fin.png',
  },
  {
    url: 'royal-canin.png',
  },
];
