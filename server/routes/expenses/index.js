const bodyParser = require("body-parser");

const Create    = require("express").Router();
const Read      = require("express").Router();
const Update    = require("express").Router();
const Delete    = require("express").Router();

require("./methods/Create")(Create);
require("./methods/Read")(Read);
require("./methods/Update")(Update);
require("./methods/Delete")(Delete);

const expenses = (router) => {
  // Route middleware
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());

  /** @method POST */
  router.use("/", Create);

  /** @method GET */
  router.use("/", Read);

  /** @method PUT */
  router.use("/", Update);

  /** @method DELETE */
  router.use("/", Delete);
}

module.exports = expenses;