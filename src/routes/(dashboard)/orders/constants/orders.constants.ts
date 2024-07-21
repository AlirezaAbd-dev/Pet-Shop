export const ORDER_STATUS_TABS = [
  {
    name: 'Delivered',
  },
  {
    name: 'Pending',
  },
  {
    name: 'Shipped',
  },
  {
    name: 'Cancelled',
  },
] as const;
export type OrderStatusTabsType = (typeof ORDER_STATUS_TABS)[number]['name'];
export type OrderStatus = Lowercase<OrderStatusTabsType>;
