const expenses = require("express").Router();

require("./expenses")(expenses);

const Routes = (router) => {

  router.use("/expenses", expenses);

}

module.exports = Routes;