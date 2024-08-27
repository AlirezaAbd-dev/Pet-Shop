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
  {
    name: 'Salesperson_confirmation',
  },
  {
    name: 'Salesperson_pre_factored',
  },
  {
    name: 'Inventory_reservations',
  },
  {
    name: 'Pre_factored_paid',
  },
  {
    name: 'Inventory_confirmation',
  },
] as const;
export type OrderStatusTabsType = (typeof ORDER_STATUS_TABS)[number]['name'];
export type OrderStatus = Lowercase<OrderStatusTabsType>;
