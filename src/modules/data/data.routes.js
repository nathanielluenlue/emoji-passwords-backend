const express = require("express");
const router = express.Router();
const controller = require("./data.controller");

router.get("/get-password", controller.getPassword);
router.post("/update-password", controller.updatePassword);
router.post("/update-username", controller.updateUsername);
router.post("/update-time-to-create-password", controller.updateTimeToCreatePassword);
router.post("/update-number-of-log-in-attempts", controller.updateNumberOfLogInAttempts);
router.post("/update-time-taken-to-log-in", controller.updateTimeTakenToLogIn);


module.exports = router;