const Expense = require("../../db/schemas/ExpenseEntry.js");

/** @method POST */
const Create = (router) => {

  // /expenses
  router.post("/", async (req, res) => {
    // Grab payload from request
    let expensePayload = req.body;
  
    // Post it to database and 
    // notify client of outcome
    try {
  
      await Expense.create(expensePayload);
      res.status(200).send("Expense successfully recorded.");
  
    } catch (error) {
  
      let errMsg = ":: An error ocurred while attempting to record the expense; the expense was not saved ::"
      console.error(error);
      res.send(errMsg);
  
    }
  
  });

}

module.exports = Create;