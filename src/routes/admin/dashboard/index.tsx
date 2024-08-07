'use client';

import {
  ArcElement,
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useMemo } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import { chartFontFamily } from './chart-options.constant';

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
  const barData: ChartData<'bar'> = {
    datasets: [
      {
        data: [-30, -20, -10, 0, 10, 20], // data and labels length should be equal
        borderColor: '#165BAA',
        backgroundColor: '#63ABFD',
        borderRadius: 12,
        borderWidth: 2,
        borderSkipped: false,
        label: 'Fish', // equality of this field with "labels" field is not important
      },
    ],
    labels: ['Fish', 'Dog', 'Cat', 'Bird', 'Ar Home', 'Toys'],
  };

  const barOptions: ChartOptions<'bar'> = useMemo(
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

  const pieData: ChartData<'pie'> = {
    datasets: [
      {
        data: [-30, 20, 10], // data and labels length should be equal
        backgroundColor: ['#F765A3', '#A155B9', '#16BFD6'],
        label: 'Fish', // equality of this field with "labels" field is not important
      },
    ],
    labels: ['Fish', 'Dog', 'Cat'],
  };

  const pieOptions: ChartOptions<'pie'> = useMemo(
    () => ({
      responsive: true,
      font: { family: chartFontFamily },
      // maintainAspectRatio: false,
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
          position: 'right' as const,
          labels: { font: { family: chartFontFamily } },
        },
      },
    }),
    [],
  );

  const stepLineData: ChartData<'line'> = {
    datasets: [
      {
        data: [-30, 20, 10, 0, -10, 40], // data and labels length should be equal
        borderColor: '#165BAA',
        backgroundColor: '#63ABFD',
        label: 'Fish', // equality of this field with "labels" field is not important
        stepped: true,
      },
    ],
    labels: ['Fish', 'Dog', 'Cat', 'Bird', 'Ar Home', 'Toys'],
  };

  const stepLineOptions: ChartOptions<'line'> = useMemo(
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
    <div>
      <div className="h-[400px] space-y-48">
        <Bar options={barOptions} data={barData} />
        <Line options={lineOptions} data={lineData} />
        <div className="flex">
          <div className="h-[400px] w-1/2">
            <Pie width={400} height={400} options={pieOptions} data={pieData} />
          </div>
          <div className="h-[400px] w-1/2">
            <Pie width={400} height={400} options={pieOptions} data={pieData} />
          </div>
        </div>
        <Line options={stepLineOptions} data={stepLineData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
