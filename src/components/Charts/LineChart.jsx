import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import styles from './LineChart.module.scss';

// Dữ liệu biểu đồ tăng trưởng người dùng theo tháng
const data = [
  { name: 'Th1', users: 400, premium: 240 },
  { name: 'Th2', users: 300, premium: 139 },
  { name: 'Th3', users: 200, premium: 980 },
  { name: 'Th4', users: 278, premium: 390 },
  { name: 'Th5', users: 189, premium: 480 },
  { name: 'Th6', users: 239, premium: 380 },
  { name: 'Th7', users: 349, premium: 430 },
];

// Component biểu đồ tăng trưởng người dùng
const UserGrowthChart = ({ heading, subHeading }) => {
  return (
    // Container chính của biểu đồ
    <div className={styles.chartContainer}>
      {/* Tiêu đề và mô tả phụ */}
      <div className={styles.header}>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
      </div>

      {/* Biểu đồ đường responsive */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* Lưới nền với đường nét đứt */}
          <CartesianGrid strokeDasharray="3 3" stroke={'#f0f0f0'} />
          {/* Trục X hiển thị tên tháng */}
          <XAxis dataKey="name" stroke={'#6B7280'} fontSize={12} tickLine={false} axisLine={false} />
          {/* Trục Y hiển thị số lượng người dùng */}
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
          {/* Đường biểu đồ cho người dùng thường */}
          <Line
            type="monotone"
            dataKey="users"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
          />
          {/* Đường biểu đồ cho người dùng premium */}
          <Line
            type="monotone"
            dataKey="premium"
            stroke={'#1f2937'}
            strokeWidth={3}
            dot={{ fill: '#1f2937', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#1f2937', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
