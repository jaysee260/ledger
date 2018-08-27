/**
 * Catalog of Application-Wide Routes
 */

 // Controllers
const expenses = require("express").Router();

// Attach Controller's Logic
require("./expenses")(expenses);

// Index of Routes
const Routes = (router) => {

  router.use("/expenses", expenses);

  // bills

}

module.exports = Routes;