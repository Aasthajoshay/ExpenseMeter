// src/components/ExpenseItem.jsx
import React from "react";
import { Trash2 } from "lucide-react";

const ExpenseItem = ({ expense, onDelete }) => {
  const { description, amount, category } = expense;

  return (
    <li className="flex-between p-4 bg-white rounded-xl shadow-md border border-gray-200">
      <div>
        <p className="text-lg font-semibold text-gray-800">{description}</p>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-md font-medium text-blue-600">₹{Number(amount).toFixed(2)}</span>
        <button
          onClick={onDelete}
          className="btn btn-danger flex items-center gap-1 text-sm"
        >
          <Trash2 size={16} /> Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
