const home = (router) => {

  router.get("/", (req, res) => {
    const message =`
        Welcome. <br />
        Go <a href="/expenses">here</a> to view all expenses.
    `;
    res.send(message);
  });

}

module.exports = home;