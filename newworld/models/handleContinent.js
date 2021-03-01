"use strict";
const mon = require("../db/mongoWrap");
const dbServer = "localhost";
const dbName = "world";

exports.getContinents = async function (res) {
    try {
        let continent = await mon.retrieve(dbServer, dbName, "continent", {});
        res.render('continent', {
            title: "continent",
            continents: continent
        });
    } catch (e) {
        console.log(e);
    }
}

exports.getContinentsLanguage = async function(res, continent){
    const countrycodes = [];
    try {
        let continentsLanguage = await mon.retrieve(dbServer, dbName, "country", {"continent": continent});
        continentsLanguage.forEach(element => {
            countrycodes.push(element.code);
        });
        console.log(countrycodes);
        let languages = await mon.retrieve(dbServer, dbName, "countrylanguage",  { countrycode: { $in: countrycodes } });
        res.render('spokenLanguage', {
            title: "lang",
            languages: languages,
            querycontinent: continent
        });
        
    } catch (e) {
        console.log(e);
    }
}