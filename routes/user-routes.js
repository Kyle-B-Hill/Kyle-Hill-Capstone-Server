const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

router.route("/")
    .get(userController.index)

router.route("/:id")
    .get(userController.findOne)
    // .patch(userController.update)
    // .post(userController.add)

module.exports = router;