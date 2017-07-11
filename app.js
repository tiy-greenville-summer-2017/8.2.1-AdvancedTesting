
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const nodeEnv = process.env.NODE_ENV || "development";
const config = require("./config.json")[nodeEnv];

mongoose.connect(config.mongoURL);

app.get("/api/sanity", (req, res) => {
  res.json({hello: "joel"});
});

app.listen(3000);

module.exports = app;
