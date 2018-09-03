const mongoose = require("mongoose");
const { g, r, gr } = require("../utils/console");

// If target DB environment is not provided,
// default connection to localhost.
module.exports = (target = "local") => {
  let url;
  switch (target) {
    case "cloud":
      let keys = require("../config").init().db.cloud;
      url = keys.uri
                .replace("<dbuser>", keys.username)
                .replace("<dbpassword>", keys.password)
                .replace("<dbname>", keys.dbname);
      break;
    case "local":
    default:
      url = require("../config").init().db.local.url;
      break;
  }

  mongoose.Promise = global.Promise;

  const opts = { useNewUrlParser: true };
  mongoose.connect(url, opts);

  const db = mongoose.connection;

  db.on("error", (err) => {
    // console.error(err);
    console.error(gr("An error occurred while attempting to connect to the %s database."), target);
    console.error(gr("Please make sure the connection string is valid,"));
    console.error(gr("or that the database is accepting incoming connections."));
    console.error(r("Process ending now -- Please restart the application."));
    
    process.exit(1);
  });

  db.once("open", () => {
    console.log(g("Connection to %s database successful."), target);
  });

}