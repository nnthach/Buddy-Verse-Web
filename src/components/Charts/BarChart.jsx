import React from 'react';
import styles from './Barchar.module.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dữ liệu biểu đồ doanh thu theo ngày
const data = [
  { name: 'T2', revenue: 4000 },
  { name: 'T3', revenue: 3000 },
  { name: 'T4', revenue: 2000 },
  { name: 'T5', revenue: 2780 },
  { name: 'T6', revenue: 1890 },
  { name: 'T7', revenue: 2390 },
  { name: 'CN', revenue: 3490 },
];

// Component biểu đồ doanh thu
const RevenueChart = ({ heading, subHeading }) => {
  return (
    // Container chính của biểu đồ
    <div className={styles.chartContainer}>
      {/* Tiêu đề và mô tả phụ */}
      <div className={styles.header}>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
      </div>

      {/* Biểu đồ responsive */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          {/* Lưới nền với đường nét đứt */}
          <CartesianGrid strokeDasharray="3 3" stroke={'#f0f0f0'} />
          {/* Trục X hiển thị tên ngày */}
          <XAxis dataKey="name" stroke={'#6B7280'} fontSize={12} tickLine={false} axisLine={false} />
          {/* Trục Y hiển thị giá trị doanh thu */}
          <YAxis stroke={'#6B7280'} fontSize={12} tickLine={false} axisLine={false} />
          {/* Tooltip hiển thị thông tin khi hover */}
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: `1px solid #e5e7eb`,
              color: 'black',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          />
          {/* Thanh biểu đồ hiển thị doanh thu */}
          <Bar dataKey="revenue" fill={'#3b82f6'} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
