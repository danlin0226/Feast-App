const router = require("express").Router();
const requestController = require("../controllers/requestController");

router.route("/").post(requestController.sendRequest);

module.exports = router;
