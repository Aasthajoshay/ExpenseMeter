// src/components/BalanceCard.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const BalanceCard = ({ expenses }) => {
  const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171"];

  const total = Array.isArray(expenses)
    ? expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0)
    : 0;

  const data = Array.isArray(expenses)
    ? expenses.reduce((acc, e) => {
        const value = Number(e.amount || 0);
        const found = acc.find((item) => item.name === e.category);
        if (found) {
          found.value += value;
        } else {
          acc.push({ name: e.category, value });
        }
        return acc;
      }, [])
    : [];

  return (
    <div className="card mb-4">
      <div className="card-header text-xl font-semibold text-gray-800">
        Total Spent: ₹{total.toFixed(2)}
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceCard;
