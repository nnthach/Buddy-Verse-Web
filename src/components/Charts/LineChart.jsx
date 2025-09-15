import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import styles from './LineChart.module.scss';

const data = [
  { name: 'Jan', users: 400, premium: 240 },
  { name: 'Feb', users: 300, premium: 139 },
  { name: 'Mar', users: 200, premium: 980 },
  { name: 'Apr', users: 278, premium: 390 },
  { name: 'May', users: 189, premium: 480 },
  { name: 'Jun', users: 239, premium: 380 },
  { name: 'Jul', users: 349, premium: 430 },
];

const UserGrowthChart = ({ heading, subHeading }) => {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.header}>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
          <Line
            type="monotone"
            dataKey="users"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
          />
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
