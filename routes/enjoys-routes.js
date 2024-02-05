const express = require("express");
const router = express.Router();
const enjoysController = require("../controllers/enjoys-controller");


router.route("/")
    .get(enjoysController.index)

router.route("/:id")
    .delete(enjoysController.removeUserEnjoys)

router.route("/connect")
    .get(enjoysController.find)

module.exports = router;