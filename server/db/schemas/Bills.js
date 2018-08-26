/**
 * Represents a single Bill
 * in a registry of Bills
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillSchema = new Schema({
  name: String,
  amount: Number,
  category: String,
  recurring: Boolean,
  dueOn: Date,
  paid: Boolean
},
{ versionKey: false }, { collection: "Bills" });

const Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;