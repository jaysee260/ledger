const mongoose = require("mongoose");
const local = "mongodb://localhost/ledger";
const { g, r, gr } = require("../utils/console");

// If no URL is provided, default connection
// to localhost
module.exports = (url = local) => {

  mongoose.Promise = global.Promise;

  const opts = { useNewUrlParser: true };
  mongoose.connect(url, opts);

  const db = mongoose.connection;

  db.on("error", () => {
    console.error(gr("An error occurred while attempting to connect to the database."));
    console.error(gr("Please make sure the connection string is valid,"));
    console.error(gr("or that your database is accepting incoming connections."));
    console.error(r("Process ending now -- Please restart the application."));
    
    process.exit(1);
  });

  db.once("open", () => {
    console.log(g("Connection to database successful."));
  });

}