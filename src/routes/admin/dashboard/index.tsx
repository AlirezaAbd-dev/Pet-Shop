'use client';

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import { Product } from '@/app/(core)/product/[productId]/page';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { OrderStatus } from '@/routes/(dashboard)/orders/constants/orders.constants';
import { OrderItem, Orders } from '@/routes/(dashboard)/orders/orders.types';
import { AddressResponse } from '@/routes/checkout/queries/addresses.query';

import OrdersTable from '../orders/orders.table';
import useAdminDashboardQuery from './admin-dashboard.query';
import AdminCategoryChart from './components/admin-categories.chart.component';
import AdminCustomerChart from './components/admin-customer.chart.component';
import AdminDashboardSummary from './components/admin-dashboard-summary.component';
import AdminOrdersByPetChart from './components/admin-orders-by-pet.chart';
import AdminPetsChart from './components/admin-pets.chart.component';
import AdminSalesChart from './components/admin-sales.chart.component';
import AdminTopSellingChart from './components/admin-top-selling.chart.component';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,

  BarElement,
  PointElement,
  LineElement,
  ArcElement,
);

const AdminDashboard = () => {
  const { data, isPending } = useAdminDashboardQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (data)
    return (
      <>
        <AdminDashboardSummary orderSummary={data.orders_summary} />
        <AdminSalesChart deliveredOrders={data.delivered_orders_by_date} />
        <AdminTopSellingChart pendingOrders={data.pending_orders_by_date} />
        <AdminCustomerChart joinedUsers={data.user_date_joined_by_date} />
        <main className="grid grid-cols-2 gap-6">
          <AdminPetsChart
            ordersByProduct={data.order_distribution_by_product}
          />
          <AdminCategoryChart
            ordersByCategory={data.order_distribution_by_category}
          />
          <AdminOrdersByPetChart
            ordersByPet={data.order_distribution_by_pet_type}
          />
        </main>
        <section className="mt-8 bg-white border border-nature-800 rounded-lg overflow-hidden">
          <OrdersTable
            orders={data.orders
              .toReversed()
              .slice(0, 20)
              .map((o) => ({
                date: o.created_at,
                orderId: o.id,
                price: o.total_price,
                state: o.status,
                username: o.user_full_name,
              }))}
          />
        </section>
      </>
    );
};

export default AdminDashboard;
