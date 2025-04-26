import { useState, useEffect } from "react";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseList from "./ExpenseList";
import BalanceCard from "./BalanceCard";

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/expense/getall", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        if (Array.isArray(data)) {
          setExpenses(data);
        } else if (Array.isArray(data.expenses)) {
          setExpenses(data.expenses); // handle if backend wraps it in { expenses: [...] }
        } else {
          setExpenses([]);            // prevent crash
        }
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setExpenses([]);
      });
  }, []); 
  const addExpense = async (expense) => {
    const res = await fetch("http://localhost:8000/api/v1/expense/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(expense),
    });
    const data = await res.json();
    if (data.success) {
      fetch("http://localhost:8000/api/v1/expense/getall", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setExpenses(data.expenses || []);
        });
    }
  };

  const deleteExpense = async (id) => {
    if (!id) {
      console.warn("Tried to delete an expense with undefined ID");
      return;
    }
    await fetch(`http://localhost:8000/api/v1/expense/remove/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    setExpenses((prev) => prev.filter((e) => e._id !== id));
  };
  

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>
      <BalanceCard expenses={expenses} />
      <AddExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default Home;
