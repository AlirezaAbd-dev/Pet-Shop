import React from 'react';

const AdminDashboardSummary = () => {
  return (
    <section className="mt-8 flex justify-between gap-4">
      <div className="flex items-center gap-3 bg-white rounded-xl p-3 w-full border border-nature-800">
        <span className="w-[52px] h-[52px] rounded-lg bg-success-500/5"></span>
        <div>
          <p className="text-lg">Paid</p>
          <p className="text-lg font-bold mt-1">5</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white rounded-xl p-3 w-full border border-nature-800">
        <span className="w-[52px] h-[52px] rounded-lg bg-link/5"></span>
        <div>
          <p className="text-lg">Delivered</p>
          <p className="text-lg font-bold mt-1">5</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white rounded-xl p-3 w-full border border-nature-800">
        <span className="w-[52px] h-[52px] rounded-lg bg-error-500/5"></span>
        <div>
          <p className="text-lg">Canceled</p>
          <p className="text-lg font-bold mt-1">5</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white rounded-xl p-3 w-full border border-nature-800">
        <span className="w-[52px] h-[52px] rounded-lg bg-warning-500/5"></span>
        <div>
          <p className="text-lg">In progress</p>
          <p className="text-lg font-bold mt-1">5</p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardSummary;
