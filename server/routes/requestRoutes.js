const router = require("express").Router();
const requestController = require("../controllers/requestController");

router
  .route("/")
  .post(requestController.sendRequest)
  .get(requestController.getRequests);

router.route("/:id").get(requestController.getRequests);

module.exports = router;
