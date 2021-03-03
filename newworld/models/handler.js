"use strict";
const mongoose = require("../db/mongooseWrap");
const model = require("./schema");
const mon = require("../db/mongooseWrap");

exports.getLanguagesAndRanking = async function (res) {
    try {
        let languages = await mongoose.retrieveDistinct("language");
        let amount = languages.length;
        //let languages = await mongoose.retrieveAggregate(model.Countrylanguage);
        //let languages = await mon.retrieveAggregate(dbServer, dbName, "countrylanguage", {$group: {language: "$language", count : {$sum:1}}});
        res.render('ranking', {
            title: "Country",
            languages: languages,
            total : amount
        });
    } catch (e) {
        console.log(e);
    }
}


exports.GetSearchRanking = async function (res) {
    try {
        
        let languages = await mongoose.retrieveDistinct("language");
        
        //let languages = await mongoose.retrieveAggregate(model.Countrylanguage);
        //let languages = await mon.retrieveAggregate(dbServer, dbName, "countrylanguage", {$group: {language: "$language", count : {$sum:1}}});
        res.render('searchRanking', {
            title: "Country",
            languages: languages
        });
    } catch (e) {
        console.log(e);
    }
}


exports.getGovernmentAndContinentsforms = async function (res) {
    try {
        let gov = await mon.retrieve(model.Governmentform);
        let cont = await mon.retrieve(model.Continent);
        console.log(gov);
        res.render('createWorld', {
            title: "Government forms",
            governmentforms: gov,
            continents: cont
        });
    } catch (e) {
        console.log(e);
    }
}

exports.getContinents = async function (res) {
    try {
        let continent = await mon.retrieve(model.Continent, {});
        res.render('continent', {
            title: "continent",
            continents: continent
        });
    } catch (e) {
        console.log(e);
    }
}

exports.getContinentsLanguage = async function(res, continent){
    const sponekLanguages = []; // alle languages der tilhører continent...
    const total = []; // alle languages, hvor country code er ens...
    try {
        let countrylanguages = await mon.retrieve(model.Countrylanguage);
        let countries = await mon.retrieve(model.Country,  {"continent": continent});
        
        countries.forEach(country => {
            countrylanguages.forEach(lang => {
                if(lang.countrycode == country.code){
                    total.push(lang.language);
                    if(!sponekLanguages.includes(lang.language)){
                        sponekLanguages.push(lang.language);
                    }
                }
            });
        });
        console.log(total);
        
        res.render('spokenLanguage', {
            title: "lang",
            languages: sponekLanguages,
            querycontinent: continent
        });
        
    } catch (e) {
        console.log(e);
    }
}

exports.getCountries = async function (res) {
    try {
        let countries = await mon.retrieve(model.Country);
        res.render('world', {
            title: "Country",
            countries: countries
        });
    } catch (e) {
        console.log(e);
    }
}

exports.postCountry = async function (req, res, next) {
    let chk = { name: req.body.name };  
    let country =  new model.Country({                   
        name: req.body.name,
        continent: req.body.continent,
        population: req.body.population,
        governmentform: req.body.governmentform,
        countrycode: req.body.countrycode
    });
    if (req.body.localname === "") country.localname = country.name;
    console.log(req.body);
    try {
        await mon.upsert(country);
        res.redirect("/");
    } catch (e) {
        console.log(e);
    }
}


exports.searchRanking = async function(res, searchedLanguage){
    
    try {
        
        //let lang = await mon.retrieve(model.Countrylanguage, {"language": searchedLanguage}); // Henter de forekomster hvor x language er anvendt.
        let languageCount = await mon.retrieveAggregate(model.Countrylanguage, [
            {
              $group: {
                _id: '$language',
                count: { $sum: 1 } // Tæller antallet.
              }
            },
            { $sort: { count: -1 } }  //Sorteret.
          ]);
        
        const found = languageCount.find( x => x._id === searchedLanguage); // Antallet af languages.
          
        let rank = await mon.retrieve(model.Countrylanguage,  {"language": searchedLanguage});
        
        console.log(languageCount);
        res.render('showSearchedRanking', {
            title: "lang",
            ranking: found.count,
            querylanguage: searchedLanguage,
            languages : languageCount
        });
        
    } catch (e) {
        console.log(e);
    }
}



