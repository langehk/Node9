"use strict";
const mon = require("../db/mongoWrap");
const dbServer = "localhost";
const dbName = "world";

exports.getGovernmentAndContinentsforms = async function (res) {
    try {
        let gov = await mon.retrieve(dbServer, dbName, "governmentform", {});
        let cont = await mon.retrieve(dbServer, dbName, "continent", {});
        res.render('createWorld', {
            title: "Government forms",
            governmentforms: gov,
            continents: cont
        });
    } catch (e) {
        console.log(e);
    }
}