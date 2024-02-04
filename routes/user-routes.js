const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

router.route("/")
    .get(userController.index)
    .post(userController.add)

router.route("/:id")
    .get(userController.findOne)
    .patch(userController.update)
    .delete(userController.remove)

router.route("/:id/enjoys")
    .get(userController.userEnjoys)
    .post(userController.addUserEnjoys)

module.exports = router;
