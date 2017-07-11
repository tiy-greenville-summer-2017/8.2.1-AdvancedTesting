
const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({

});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
