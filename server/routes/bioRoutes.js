const router = require("express").Router();
const bioController = require("../controllers/bioController");

router.route("/").get(bioController.getBio);

module.exports = router;
