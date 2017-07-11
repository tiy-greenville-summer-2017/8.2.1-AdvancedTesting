
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cat = require('./models/cat');
mongoose.Promise = require('bluebird')
const app = express();

const nodeEnv = process.env.NODE_ENV || "development";
const config = require("./config.json")[nodeEnv];

app.use(bodyParser.json());
mongoose.connect(config.mongoURL);

app.get("/api/cats", (req, res) => {
  Cat.find({}).then((cats) => {
    res.json(cats);
  });
});

app.post("/api/cats", (req, res) => {
  const newCat = new Cat(req.body).save().then(cat => {
    res.status(201).json({});
  });
});

app.get("/api/sanity", (req, res) => {
  res.json({hello: "joel"});
});

app.listen(3000);

module.exports = app;
