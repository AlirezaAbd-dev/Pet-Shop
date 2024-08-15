import React from 'react';

import { OrdersSummary } from '../admin-dashboard.query';

type Props = {
  orderSummary: OrdersSummary[];
};

const AdminDashboardSummary = (props: Props) => {
  const pending = props.orderSummary.find((o) => o.status === 'pending');
  const delivered = props.orderSummary.find((o) => o.status === 'delivered');
  const shipped = props.orderSummary.find((o) => o.status === 'shipped');
  const cancelled = props.orderSummary.find((o) => o.status === 'cancelled');

  return (
    <section className="mt-8 flex justify-between gap-4">
      <div className="flex items-center gap-3 bg-white rounded-xl p-3 w-full border border-nature-800">
        <span className="w-[70px] h-[70px] rounded-lg bg-success-500/5"></span>
        <div>
          <p className="text-lg">Pending</p>
          <p className="text-base mt-1">Count: {pending?.count || 0}</p>
          <p className="text-lg font-bold mt-1">${pending?.total_sum || 0}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white rounded-xl p-3 w-full border border-nature-800">
        <span className="w-[70px] h-[70px] rounded-lg bg-link/5"></span>
        <div>
          <p className="text-lg">Delivered</p>
          <p className="text-base mt-1">Count: {delivered?.count || 0}</p>
          <p className="text-lg font-bold mt-1">${delivered?.total_sum || 0}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white rounded-xl p-3 w-full border border-nature-800">
        <span className="w-[70px] h-[70px] rounded-lg bg-warning-500/5"></span>
        <div>
          <p className="text-lg">Shipped</p>
          <p className="text-base mt-1">Count: {shipped?.count || 0}</p>
          <p className="text-lg font-bold mt-1">${shipped?.total_sum || 0}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white rounded-xl p-3 w-full border border-nature-800">
        <span className="w-[70px] h-[70px] rounded-lg bg-error-500/5"></span>
        <div>
          <p className="text-lg">Cancelled</p>
          <p className="text-base mt-1">Count: {cancelled?.count || 0}</p>
          <p className="text-lg font-bold mt-1">${cancelled?.total_sum || 0}</p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardSummary;
