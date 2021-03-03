const mongoose = require('mongoose');

const CountryLanguageModel = new mongoose.Schema({
    countrycode: String,
    language: String,
    isofficial: String, 
    percentage: Number
});

const Countrylanguage = mongoose.model("Countrylanguage", CountryLanguageModel, "countrylanguage");

const GovernmentformModel = new mongoose.Schema({ name: String });
  
const Governmentform = mongoose.model("Governmentform", GovernmentformModel, "governmentform");


const ContinentModel = new mongoose.Schema({
    name: String
  });
  
const Continent = mongoose.model("Continent", ContinentModel, "continent");


const CountryModel = new mongoose.Schema({
    name: String,
    continent: String,
    code: String,
    governmentform: String,
    population : Number
  });
  
const Country = mongoose.model("Country", CountryModel, "country");

exports.Countrylanguage = Countrylanguage;
exports.Governmentform = Governmentform;
exports.Continent = Continent;
exports.Country = Country;