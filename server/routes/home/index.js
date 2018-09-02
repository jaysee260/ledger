const home = (router) => {

  router.get("/", (req, res) => {
    const homeMessage = `
      <code>
        Welcome. <br />
        Go <a href="/expenses">here</a> to view all expenses.
      </code>
    `;
    res.send(homeMessage);
  });

}

module.exports = home;