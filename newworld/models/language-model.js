const mongoose = require('mongoose');

const LanguageModel = new mongoose.Schema({
    countrycode: String,
    language: String,
    isofficial: String, 
    percentage: Number
});

module.exports = mongoose.model("Countrylanguage", LanguageModel, "countrylanguage");