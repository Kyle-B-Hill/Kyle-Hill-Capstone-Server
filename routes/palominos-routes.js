const express = require("express");
const router = express.Router();
const palominosController = require("../controllers/palominos-controller");

router.route("/")
    .get(palominosController.index)
    .post(palominosController.add)
  
router.route("/:id")
    .get(palominosController.findPalominos)
    
module.exports = router;