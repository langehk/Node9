"use strict";
const mon = require("../db/mongoWrap");
const dbServer = "localhost";
const dbName = "world";

exports.getCountries = async function (res) {
    try {
        let country = await mon.retrieve(dbServer, dbName, "country", {});
        res.render('world', {
            title: "Country",
            countries: country
        });
    } catch (e) {
        console.log(e);
    }
}


exports.postCountry = async function (req, res, next) {
    let chk = { name: req.body.name };  // check object for existence
    let country = {                     // create obejct in db-format
        name: req.body.name,
        continent: req.body.continent,
        population: req.body.population,
        governmentform: req.body.governmentform,
        countrycode: req.body.countrycode
    };
    if (req.body.localname === "") country.localname = country.name;
    console.log(req.body);
    try {
        let cs = await mon.upsert(dbServer, dbName, "countries", country, chk);
        res.redirect("/");
    } catch (e) {
        console.log(e);
    }
}