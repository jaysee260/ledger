const app = require("express")();
const { PORT = 3000 } = process.env;
const { y } = require("./utils/console");

// Initiate Database Connection.
require("./db")();

// Register Router.
// See ./routes/index.js for
// catalog of routes.
const Router = require("express").Router();
require("./routes")(Router);
app.use(Router);

// Start application.
app.listen(PORT, () => {
  console.log("Application running on PORT " + PORT + ".");
  console.log("Use Ctrl + C to end process.");
})
