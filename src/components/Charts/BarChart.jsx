import React from 'react';
import styles from './Barchar.module.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// ======= Thêm phần này =======
const parsePrice = (price) => Number(price.replace(/\./g, ''));

const getRevenueData = (orders) => {
  const map = {};

  orders.forEach((order) => {
    const date = order.createdAt.split(' ')[0]; // "28-11-2025"
    if (!map[date]) map[date] = 0;
    map[date] += parsePrice(order.price);
  });

  return Object.entries(map).map(([date, revenue]) => ({
    name: date.substring(0, 5), // "28-11"
    revenue,
  }));
};
// ===============================

// Component
const RevenueChart = ({ heading, subHeading, orders }) => {
  const data = getRevenueData(orders); // <-- lấy dữ liệu thật

  return (
    <div className={styles.chartContainer}>
      <div className={styles.header}>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={'#f0f0f0'} />

          <XAxis dataKey="name" stroke={'#6B7280'} fontSize={12} tickLine={false} axisLine={false} />

          <YAxis stroke={'#6B7280'} fontSize={12} tickLine={false} axisLine={false} />

          <Tooltip
            formatter={(value) => value.toLocaleString('vi-VN')}
            contentStyle={{
              backgroundColor: 'white',
              border: `1px solid #e5e7eb`,
              color: 'black',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          />

          <Bar dataKey="revenue" fill={'#3b82f6'} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
