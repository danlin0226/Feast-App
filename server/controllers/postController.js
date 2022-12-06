const { v4: uuidv4 } = require("uuid");
const knex = require("knex")(require("../knexfile"));

const findUserPosts = (req, res) => {
  knex("listings")
    .where({ user_id: req.user.uid })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(400).send("error retrieving posts");
    });
};

const findOne = (req, res) => {
  console.log(req.params);
  knex("listings")
    .where({ id: req.params.id })
    .then((data) => {
      if (data.length === 0) {
        res.status(404).send("Posts not found");
      }
      res.status(200).json(data[0]);
    })
    .catch(() => {
      res.status(400).send("error retrieving post");
    });
};

//
const create = (req, res) => {
  if (
    !req.body.name ||
    !req.body.location ||
    !req.body.time ||
    !req.body.spots
  ) {
    return res
      .status(400)
      .send("Please provide name, location, time, spots, in the request");
  }
  const newPostId = uuidv4();

  knex("listings")
    .insert({ ...req.body, id: newPostId, user_id: req.user.uid })
    .then(() => {
      knex("listings")
        .where({ id: newPostId })
        .then((data) => {
          res.status(201).json(data[0]);
        });
    })
    .catch(() => {
      res.status(400).send("error creating post");
    });
};

const update = (req, res) => {
  knex("listings")
    .update(req.body)
    .then(() => {
      knex("listings")
        .where({ id: req.params.id })
        .then((data) => {
          res.status(201).json(data[0]);
        });
    })
    .catch(() => {
      res.status(400).send(`error updating post with id ${req.params.id}`);
    });
};

const remove = (req, res) => {
  knex("listings")
    .where({ id: req.params.id })
    .del()
    .then(() => {
      res.status(200).json({ deletedPostId: req.params.id });
    })
    .catch((err) =>
      res
        .status(400)
        .send(`Error deleting Educator with ID: ${req.params.id} ${err}`)
    );
};

module.exports = {
  findUserPosts,
  create,
  findOne,
  update,
  remove,
};
