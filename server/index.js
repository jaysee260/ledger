const app = require("express")();
const { PORT: port = 3000 } = process.env;
const { NODE_ENV: env = "dev" } = process.env;

// Register development middleware.
if (env === "dev") {
  const logger = require("morgan");
  app.use(logger(env));
}

// Initiate Database Connection.
require("./db")();

// Initialize Application Router and attach business logic.
// See ./routes/index.js for catalog of routes.
const appRouter = require("express").Router();
require("./routes")(appRouter);
app.use(appRouter);

// Start application.
app.listen(port, () => {
  console.log("Application running in %s mode on http://localhost:%s",
    env.toUpperCase(), port
  );
  console.log("Hold Ctrl + C to end process.");
})
