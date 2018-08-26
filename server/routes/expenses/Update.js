const Expense = require("../../db/schemas/ExpenseEntry.js");

/** @method PUT */
const Update = (router) => {

  // /expenses/:_id
  router.put("/:_id", async (req, res) => {
    const { _id } = req.params;
    const updatedExpense = req.body;
  
    if (!_id)
      res.send("Must provide an expense _id");
    
    if (!updatedExpense)
      res.send("Must provide an expense with updates to be made; none provided.");
  
    try {
      console.log(updatedExpense);
      await Expense.findByIdAndUpdate(_id, updatedExpense);
      res.status(200).send("Updated expense with _id " + _id);
  
    } catch (error) {
  
      console.log(error)
      res.send("An error occurred while attempting to update expense with _id " + _id);
  
    }
  });

}

module.exports = Update;
