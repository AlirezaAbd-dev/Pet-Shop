import { Product } from '@/app/(core)/product/[productId]/page';

import { OrderStatus } from './constants/orders.constants';

export interface Orders {
  id: number;
  user_full_name: string;
  created_at: string;
  updated_at: string;
  status: OrderStatus;
  total_price: string;
  order_note: string;
  order_address: OrderAddress;
  order_items: OrderItem[];
  receipt: null | string;
}

export interface OrderAddress {
  id: number;
  country: string;
  county: string;
  city: string;
  street: string;
  post_code: string;
  phone_number: string;
}

export interface OrderItem {
  id: number;
  product: Product;
  quantity: number;
  price: string;
}
