import express from 'express';
import {
  addExpense,
  removeExpense,
  getAllExpenses,
  updateExpenses,
  markAsDoneOrUndone
} from '../controller/expense.controller.js';

import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

// All routes should require auth
router.use(isAuthenticated);

// Expense routes
router.get("/getall", getAllExpenses);
router.post("/add", addExpense);
router.delete("/remove/:id", removeExpense);
router.put("/update/:id", updateExpenses);
router.put("/:id/done", markAsDoneOrUndone);

export default router;
