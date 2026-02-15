const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use("/health", require("./modules/health/health.routes"));
app.use("/data", require("./modules/data/data.routes"));

module.exports = app;
