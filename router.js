const apiController = require('./controllers/api') ;

module.exports = function (app) {
  app.get("/api/cats", apiController.get);
  app.post("/api/cats", apiController.post);
};
