const { update } = require("./postController");

const knex = require("knex")(require("../knexfile.js"));

const getBio = (req, res) => {
  knex("users")
    .where({ id: req.user.uid })
    .then((data) => {
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      res.status(400).message(err);
    });
};

const editBio = (req, res) => {
  knex("users")
    .where({ id: req.user.uid })
    .update(req.body)
    .then(() => {
      knex("users")
        .where({ id: req.user.uid })
        .then((data) => {
          res.status(201).json(data[0]);
        });
    })
    .catch(() => {
      res.status(400).send(`error updating bio with id ${req.params.id}`);
    });
};

module.exports = {
  getBio,
  editBio,
};
