export const ORDER_STATUS_TABS = [
  {
    name: 'Delivered',
  },
  {
    name: 'In progress',
  },
  {
    name: 'paid',
  },
  {
    name: 'Cancelled',
  },
] as const;
export type OrderStatusTabsType = (typeof ORDER_STATUS_TABS)[number]['name'];
