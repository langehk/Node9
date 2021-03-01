const mongoose = require('mongoose');

const ContinentModel = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Continent", ContinentModel, "continent");