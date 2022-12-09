const knex = require("knex")(require("../knexfile"));

const signup = (req, res) => {
  // console.log(req.headers);
  console.log("posted user to user table");
  console.log(req.user);
  const userId = req.user.uid;
  const email = req.user.email;

  knex("users")
    .where({ id: userId })
    .then((data) => {
      if (data.length === 0) {
        return knex("users")
          .insert({ ...req.body, id: userId, email: email })
          .then(() => {
            knex("users")
              .where({ id: userId })
              .then((data) => {
                res.status(200).json(data);
              });
          });
      }

      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  signup,
};
