/**
 * Catalog of Application-Wide Routes
 */

 // Controllers
const home = require("express").Router();
const expenses = require("express").Router();

// Attach Controller's Logic
require("./expenses")(expenses);
require("./home")(home);

// Index of Routes
const Routes = (router) => {

  // /
  router.use("/", home);
  
  // /expenses
  router.use("/expenses", expenses);

  // bills

}

module.exports = Routes;