const bodyParser = require("body-parser");

const Create    = require("express").Router();
const Read      = require("express").Router();
const Update    = require("express").Router();
const Delete    = require("express").Router();

require("./Create")(Create);
require("./Read")(Read);
require("./Update")(Update);
require("./Delete")(Delete);

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