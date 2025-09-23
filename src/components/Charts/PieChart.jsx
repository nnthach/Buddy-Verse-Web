import React from 'react';
import styles from './Barchar.module.scss';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Component biểu đồ phân bố người dùng
const UserDistributionChart = ({ heading, subHeading }) => {
  // Dữ liệu phân bố người dùng
  const data = [
    { name: 'Người dùng Premium', value: 2318, color: '#3b82f6' },
    { name: 'Người dùng Miễn phí', value: 1256, color: '#1f2937' },
    { name: 'Người dùng Thử nghiệm', value: 456, color: '#6b7280' },
    { name: 'Không hoạt động', value: 234, color: '#d1d5db' },
  ];

  return (
    // Container chính của biểu đồ
    <div className={styles.chartContainer}>
      {/* Tiêu đề và mô tả phụ */}
      <div className={styles.header}>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
      </div>

      {/* Biểu đồ tròn responsive */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
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
          {/* Chú thích hiển thị ở dưới cùng */}
          <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ color: '#374151' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserDistributionChart;
