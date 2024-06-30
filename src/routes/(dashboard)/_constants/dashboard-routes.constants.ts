import SvgGridLayout24 from '@/assets/svg/grid-layout-24.svg';
import SvgGridLayoutRed24 from '@/assets/svg/grid-layout-red-24.svg';
import SvgHeart24 from '@/assets/svg/heart-24.svg';
import SvgHeartRed24 from '@/assets/svg/heart-red-24.svg';
import SvgListDoListCheckmark24 from '@/assets/svg/list-do-list-checkmark-24.svg';
import SvgListDoListCheckmarkRed24 from '@/assets/svg/list-do-list-checkmark-red-24.svg';
import SvgSingleUser24 from '@/assets/svg/single-user-24.svg';
import SvgSingleUserRed24 from '@/assets/svg/single-user-red-24.svg';

export const DASHBOARD_ROUTES = [
  {
    name: 'Dashboard',
    icon: SvgGridLayout24,
    activeIcon: SvgGridLayoutRed24,
    link: '/dashboard/main',
  },
  {
    name: 'Orders',
    icon: SvgListDoListCheckmark24,
    activeIcon: SvgListDoListCheckmarkRed24,
    link: '/dashboard/orders',
  },
  {
    name: 'Saved',
    icon: SvgHeart24,
    activeIcon: SvgHeartRed24,
    link: '/dashboard/saved',
  },
  {
    name: 'Profile',
    icon: SvgSingleUser24,
    activeIcon: SvgSingleUserRed24,
    link: '/dashboard/profile',
  },
];
