const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("something");
  res.json({ status: "ok" });
});

module.exports = router;
