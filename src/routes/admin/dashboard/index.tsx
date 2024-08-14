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

import AdminCategoryChart from './components/admin-categories.chart.component';
import AdminCustomerChart from './components/admin-customer.chart.component';
import AdminDashboardSummary from './components/admin-dashboard-summary.component';
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
  return (
    <>
      <AdminDashboardSummary />
      <AdminSalesChart />
      <AdminTopSellingChart />
      <AdminCustomerChart />
      <main className="flex gap-6">
        <AdminPetsChart />
        <AdminCategoryChart />
      </main>
    </>
  );
};

export default AdminDashboard;
