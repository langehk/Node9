const mongoose = require('mongoose');

const CountryModel = new mongoose.Schema({
  name: String,
  continent: String,
  code: String,
  governmentform: String,
  population : Number
});

module.exports = mongoose.model("Country", CountryModel, "country");