const Expense = require("../../db/schemas/ExpenseEntry.js");

/** @method GET */
const Read = (router) => {

  // /expenses
  router.get("/", async (req, res) => {
    try {

      let expenses = await Expense.find({});
      res.status(200).json({ expenses });

    } catch (error) {

      console.log("something went wrong");
      res.send("something went wrong");

    }
  });

  // /expenses/:_id
  router.get("/:_id", async (req, res) => {
    const { _id } = req.params;
  
    if (!_id)
      res.send("Must provide an expense _id");
  
    try {
  
      let expense = await Expense.findById(_id);
      res.status(200).json({ expense });
  
    } catch (error) {
  
      console.log(error)
      res.send("Did not find Expense with matching _id");
  
    }
  });

}

module.exports = Read;
