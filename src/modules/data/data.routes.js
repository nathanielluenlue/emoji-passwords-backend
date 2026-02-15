const express = require("express");
const router = express.Router();
const controller = require("./data.controller");

router.post("/check-password", controller.checkPassword);
router.post("/update-password", controller.updatePassword);
router.post("/update-username", controller.updateUsername);

module.exports = router;