import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-3">Expenses</h2>

      {!Array.isArray(expenses) || expenses.length === 0 ? (
        <p className="text-gray-500 text-center">No expenses recorded.</p>
      ) : (
        <ul className="space-y-2">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense._id}
            expense={expense} // ✅ pass the whole object
            onDelete={() => deleteExpense(expense._id)}
          />
        ))}
      </ul>
      
      )}
    </div>
  );
};

export default ExpenseList;
