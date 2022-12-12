const router = require("express").Router();
const requestController = require("../controllers/requestController");

router
  .route("/")
  .post(requestController.sendRequest)
  .get(requestController.getRequests);

router.route("/:id").get(requestController.getRequests);
router.route("/user/:id").get(requestController.getUserRequests);

module.exports = router;
