const app = require("express")();
const { PORT = 3000 } = process.env;

// Initiate Database Connection.
require("./db")();

// Initialize Application Router
// and attach business logic.
// See ./routes/index.js for
// catalog of routes.
const appRouter = require("express").Router();
require("./routes")(appRouter);
app.use(Router);

// Start application.
app.listen(PORT, () => {
  console.log("Application running on PORT " + PORT + ".");
  console.log("Use Ctrl + C to end process.");
})
