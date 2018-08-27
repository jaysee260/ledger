const expenses = require("express").Router();

require("./expenses")(expenses);

const Routes = (router) => {

  router.use("/expenses", expenses);

  // bills

}

module.exports = Routes;