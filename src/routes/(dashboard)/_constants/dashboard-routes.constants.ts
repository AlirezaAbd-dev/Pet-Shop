import SvgGridLayout24 from '@/assets/svg/grid-layout-24.svg';
import SvgGridLayoutRed24 from '@/assets/svg/grid-layout-red-24.svg';
import SvgHeart24 from '@/assets/svg/heart-24.svg';
import SvgHeartRed24 from '@/assets/svg/heart-red-24.svg';
import SvgListDoListCheckmark24 from '@/assets/svg/list-do-list-checkmark-24.svg';
import SvgListDoListCheckmarkRed24 from '@/assets/svg/list-do-list-checkmark-red-24.svg';
import SvgSingleUser24 from '@/assets/svg/single-user-24.svg';
import SvgSingleUserRed24 from '@/assets/svg/single-user-red-24.svg';

import { OrderStatus } from '../orders/constants/orders.constants';

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

export const DASHBOARD_ROUTES_MINI = DASHBOARD_ROUTES.toSpliced(0, 1);

export const STATUSES: {
  name: Capitalize<OrderStatus>;
  colorClassName: string;
  bgClassName: string;
}[] = [
  {
    name: 'Shipped',
    colorClassName: 'text-warning-500',
    bgClassName: 'bg-warning-500/5',
  },
  {
    name: 'Cancelled',
    colorClassName: 'text-error-500',
    bgClassName: 'bg-error-500/5',
  },
  {
    name: 'Pending',
    colorClassName: 'text-success-500',
    bgClassName: 'bg-success-500/5',
  },
  {
    name: 'Delivered',
    colorClassName: 'text-link',
    bgClassName: 'bg-link/5',
  },
  {
    name: 'Inventory_confirmation',
    colorClassName: 'text-success-500',
    bgClassName: 'bg-link/5',
  },
  {
    name: 'Inventory_reservations',
    colorClassName: 'text-warning-500',
    bgClassName: 'bg-link/5',
  },
  {
    name: 'Pre_factored_paid',
    colorClassName: 'text-error-500',
    bgClassName: 'bg-link/5',
  },
  {
    name: 'Salesperson_confirmation',
    colorClassName: 'text-success-500',
    bgClassName: 'bg-link/5',
  },
  {
    name: 'Salesperson_pre_factored',
    colorClassName: 'text-link',
    bgClassName: 'bg-link/5',
  },
];
