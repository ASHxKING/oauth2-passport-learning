const showHomePage = (req, res) => {
  res.render("home.ejs");
};

const showSecretsPage = (req, res) => {
  res.render("secrets.ejs");
};

export {
  showHomePage,
  showSecretsPage,
};