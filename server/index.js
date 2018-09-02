const app = require("express")();
const { PORT = 3000 } = process.env;

// Initiate Database Connection.
require("./db")();

// Initialize Application Router and attach business logic.
// See ./routes/index.js for catalog of routes.
const appRouter = require("express").Router();
require("./routes")(appRouter);
app.use(appRouter);

// Start application.
app.listen(PORT, () => {
  console.log("Application running on http://localhost:%s", PORT);
  console.log("Hold Ctrl + C to end process.");
})
