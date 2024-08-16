import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaBullseye, FaUtensils, FaListAlt } from 'react-icons/fa';

const weeklyData = [
  { name: 'Mon', uv: 4000 },
  { name: 'Tue', uv: 3000 },
  { name: 'Wed', uv: 2000 },
  { name: 'Thu', uv: 2780 },
  { name: 'Fri', uv: 1890 },
  { name: 'Sat', uv: 2390 },
  { name: 'Sun', uv: 3490 },
];

const monthlyData = [
  { name: 'Week 1', uv: 10000 },
  { name: 'Week 2', uv: 12000 },
  { name: 'Week 3', uv: 8000 },
  { name: 'Week 4', uv: 15000 },
];

const yearlyData = [
  { name: 'Jan', uv: 40000 },
  { name: 'Feb', uv: 30000 },
  { name: 'Mar', uv: 50000 },
  { name: 'Apr', uv: 70000 },
  { name: 'May', uv: 60000 },
  { name: 'Jun', uv: 80000 },
  { name: 'Jul', uv: 90000 },
  { name: 'Aug', uv: 110000 },
  { name: 'Sep', uv: 100000 },
  { name: 'Oct', uv: 120000 },
  { name: 'Nov', uv: 130000 },
  { name: 'Dec', uv: 140000 },
];

const ActivityChart = () => {
  const [selectedFilter, setSelectedFilter] = useState('weekly');

  const getData = () => {
    switch (selectedFilter) {
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
      case 'yearly':
        return yearlyData;
      default:
        return weeklyData;
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded mb-4">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-gray-400">Activity</h3>
      <div className="relative">
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="block appearance-none w-full bg-gray-700 border border-gray-600 text-gray-400 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={getData()} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
  );
};
export default ActivityChart;
