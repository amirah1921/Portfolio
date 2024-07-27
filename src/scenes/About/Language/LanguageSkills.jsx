import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import s from './LanguageSkills.module.scss';

const data = [
  { name: ' Mandarin', value: 15 },
  { name: ' French', value: 10 },
  { name: ' German', value: 10 },
  { name: ' Malay', value: 30 },
  { name: ' English', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A'];

const LanguageSkills = () => {
  return (
    <div className={s.container}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default LanguageSkills;
