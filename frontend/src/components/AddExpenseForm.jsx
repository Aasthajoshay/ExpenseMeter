import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: uuidv4(),
      amount: parseFloat(formData.amount),
    };
    addExpense(newExpense);

     setFormData({
      description: "",
      amount: "",
      date: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card mb-4">
      <h2 className="card-header">Add Expense</h2>
      <input
        name="description"  
        value={formData.description}
        onChange={handleChange}
        className="input mb-3"
        placeholder="Description"
        required
      />
      <input
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
        className="input mb-3"
        placeholder="Amount"
        required
      />
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        className="input mb-3"
        required
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="select mb-4"
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Utilities">Utilities</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" className="btn btn-primary w-full">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
