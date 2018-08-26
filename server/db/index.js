const mongoose = require("mongoose");
const local = "mongodb://localhost/ledger";

// If no URL is provided, default connection
// to localhost
module.exports = (URL = local) => {

  mongoose.Promise = global.Promise;

  mongoose.connect(URL, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on("error", () => {
    console.error("An error occurred while attempting to connect to the database.");
    console.error("Please make sure the connection string is valid,");
    console.error("or that your database is accepting incoming connections.");
  });

  db.once("open", () => {
    console.log("Connection to database successful");
  });

}