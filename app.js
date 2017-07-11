
const express = require('express');
const app = express();

app.get("/api/sanity", (req, res) => {
  res.json({hello: "joel"});
});

app.listen(3000);

module.exports = app;
