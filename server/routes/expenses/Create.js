const Expense = require("../../db/schemas/ExpenseEntry.js");

/**
 * @name Create
 * @param {Object} router
 * @description
 * Catalog of POST routes
 * for /expenses endpoint
 */
const Create = (router) => {

  /**
   * @method POST
   * @name /expenses
   * @description
   * Creates and saves a new
   * Entry Document into the database.
   */
  // /expenses
  router.post("/", async (req, res) => {
    // Grab payload from request
    let expensePayload = req.body;
  
    // Post it to database and 
    // notify client of outcome
    try {
  
      let doc = await Expense.create(expensePayload);
      res.status(200).json({
        message: "Expense successfully recorded.",
        _id: doc._id
      });
  
    } catch (error) {
  
      let errMsg = ":: An error ocurred while attempting to record the expense; the expense was not saved ::"
      console.error(error);
      res.send(errMsg);
  
    }
  
  });

}

module.exports = Create;