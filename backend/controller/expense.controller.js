import { Expense } from "../models/expense.model.js";

// ✅ Add Expense
export const addExpense = async (req, res) => {
  try {
    const { description, amount, category } = req.body;
    const userId = req.id;

    if (!description || !amount || !category) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const expense = await Expense.create({
      description,
      amount: Number(amount),
      category,
      userId,
    });

    return res.status(201).json({
      message: "New Expense added successfully",
      expense,
      success: true,
    });
  } catch (error) {
    console.error("Error in adding expense:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// ✅ Get All Expenses
export const getAllExpenses = async (req, res) => {
  try {
    const userId = req.id;
    const category = req.query.category || "";
    const done = req.query.done || "";

    const query = { userId };

    if (category.toLowerCase() !== "all" && category !== "") {
      query.category = { $regex: category, $options: "i" };
    }

    if (done.toLowerCase() === "done") {
      query.done = true;
    } else if (done.toLowerCase() === "undone") {
      query.done = false;
    }

    const expenses = await Expense.find(query);

    return res.status(200).json({
      expenses,
      success: true,
    });
  } catch (error) {
    console.error("Error in getting expenses:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// ✅ Mark As Done or Undone
export const markAsDoneOrUndone = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const { done } = req.body;

    const expense = await Expense.findByIdAndUpdate(
      expenseId,
      { done: Boolean(done) },
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Expense updated successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in updating expense:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// ✅ Remove Expense
export const removeExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    await Expense.findByIdAndDelete(expenseId);

    return res.status(200).json({
      message: "Expense deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in deleting expense:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// ✅ Update Expense
export const updateExpenses = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const { description, amount, category } = req.body;

    const updateData = {
      ...(description && { description }),
      ...(amount && { amount: Number(amount) }),
      ...(category && { category }),
    };

    const expense = await Expense.findByIdAndUpdate(expenseId, updateData, {
      new: true,
    });

    return res.status(200).json({
      message: "Expense updated successfully",
      expense,
      success: true,
    });
  } catch (error) {
    console.error("Error in updating expenses:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
