'use client';

import { ChartData, ChartOptions } from 'chart.js';
import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

import { chartFontFamily } from '../chart-options.constant';

const AdminSalesChart = () => {
  const lineData: ChartData<'line'> = {
    datasets: [
      {
        data: [-30, 20, 10, 0, -10, 40], // data and labels length should be equal
        borderColor: '#165BAA',
        backgroundColor: '#63ABFD',
        label: 'Fish', // equality of this field with "labels" field is not important
      },
    ],
    labels: ['Fish', 'Dog', 'Cat', 'Bird', 'Ar Home', 'Toys'],
  };

  const lineOptions: ChartOptions<'line'> = useMemo(
    () => ({
      responsive: true,
      font: { family: chartFontFamily },
      maintainAspectRatio: false,
      animation: { delay: 0, easing: 'easeOutQuad' },
      plugins: {
        tooltip: {
          backgroundColor: '#fff',
          animation: { duration: 100, easing: 'linear' },
          bodyColor: '#000',
          titleColor: '#000',
          cornerRadius: 6,
          boxPadding: 8,
          padding: 12,
          borderColor: '#CBD5E1',
          borderWidth: 1,
          titleFont: { size: 16, family: chartFontFamily },
          bodyFont: { size: 14, family: chartFontFamily },
        },
        legend: {
          position: 'top' as const,
          labels: { font: { family: chartFontFamily } },
        },
      },
    }),
    [],
  );

  return (
    <section className="bg-white border border-nature-800 mt-8 rounded-xl">
      <div className="py-7 px-14 border-b border-nature-900">
        <p className="font-semibold text-[#828282]">PRIMARY TEXT</p>
        <p className="font-medium text-[40px] mt-1">5.987,37</p>
        <p className="text-[#828282] text-sm mt-1">Secondary text</p>
      </div>
      <div className="mt-7 h-[300px] px-8 pb-8">
        <Line options={lineOptions} data={lineData} />
      </div>
    </section>
  );
};

export default AdminSalesChart;
