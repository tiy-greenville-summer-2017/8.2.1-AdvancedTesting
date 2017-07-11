const Cat = require('../models/cat');

module.exports = {
  get: (req, res) => {
    Cat.find({}).then((cats) => {
      res.json(cats);
    });
  },
  post: (req, res) => {
    const newCat = new Cat(req.body).save().then(cat => {
      res.status(201).json({});
    });
  }
};
