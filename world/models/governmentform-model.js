const mongoose = require('mongoose');

const GovernmentformModel = new mongoose.Schema({
  _id: Number,
  name: String
});

module.exports = mongoose.model("Governmentform", GovernmentformModel, "governmentform");
