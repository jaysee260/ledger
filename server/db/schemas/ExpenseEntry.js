/**
 * Represents a single Expense
 * in a registry of Expenses.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseEntrySchema = new Schema({
  amount: Number,
  label: String,
  category: String,
  month: {
    type: Number,
    default: new Date().getMonth() + 1
  },
  date: {
    type: Number,
    default: new Date().getDate()
  },
  year: {
    type: Number,
    default: new Date().getFullYear()
  }
},
{ versionKey: false },
{ collection: "Expenses" });

const Expense = mongoose.model("Expense", ExpenseEntrySchema);

module.exports = Expense;