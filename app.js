
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cat = require('./models/cat');
const router = require('./router');
mongoose.Promise = require('bluebird')
const app = express();

const nodeEnv = process.env.NODE_ENV || "development";
const config = require("./config.json")[nodeEnv];

app.use(bodyParser.json());
mongoose.connect(config.mongoURL);

router(app);

app.get("/api/sanity", (req, res) => {
  res.json({hello: "joel"});
});

app.listen(3000);

module.exports = app;
