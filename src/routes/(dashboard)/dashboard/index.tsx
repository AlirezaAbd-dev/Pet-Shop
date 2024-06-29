import DashboardPages from './components/dashboard-pages.component';
import LastOrders from './components/last-orders.component';
import MobileInfo from './components/mobile-info.component';
import OrdersSummary from './components/orders-summary.component';

const MainDashboard = () => {
  return (
    <main>
      <MobileInfo />
      <OrdersSummary />
      <LastOrders />
      <DashboardPages />
    </main>
  );
};

export default MainDashboard;
