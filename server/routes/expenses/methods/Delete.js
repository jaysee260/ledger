const Expense = require("../../../db/schemas/ExpenseEntry.js");

/** @method DELETE */
const Delete = (router) => {

  // /expenses/:_id
  router.delete("/:_id", async (req, res) => {
    const { _id } = req.params;
  
    if (!_id)
      res.send("Must provide an expense _id");
  
    try {
      
      await Expense.findByIdAndRemove(_id);
      res.status(200).send("Deleted expense with _id of " + _id);
  
    } catch (error) {
  
      console.error(error);
      res.send("There was an error while trying to delete this expense.");
  
    }
  });

}

module.exports = Delete;
