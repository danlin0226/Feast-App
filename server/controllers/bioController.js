const knex = require("knex")(require("../knexfile"));

const getBio = (req, res) => {
  // console.log(req.headers);
  console.log(req.user);
  res.status(200).json({ message: "signup test response" });
};

module.exports = {
  getBio,
};
