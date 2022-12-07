const router = require("express").Router();
const postController = require("../controllers/postController");

router.route("/").post(postController.create).get(postController.findUserPosts);

router
  .route("/:id")
  .get(postController.findOne)
  .patch(postController.update)
  .delete(postController.remove);

module.exports = router;
