import React from 'react';
import styles from './Barchar.module.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 2000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

const RevenueChart = ({ heading, subHeading }) => {
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
