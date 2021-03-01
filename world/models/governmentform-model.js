const mongoose = require('mongoose');

const GovernmentformModel = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Governmentform", GovernmentformModel, "governmentform");