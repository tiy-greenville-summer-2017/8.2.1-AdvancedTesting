
const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: String,
  fluffiness: Number
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
