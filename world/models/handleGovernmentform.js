"use strict";
const mon = require("./mongoWrap");
const dbServer = "localhost";
const dbName = "world";

exports.getGovernmentforms = async function (res) {
    try {
        let gov = await mon.retrieve(dbServer, dbName, "governmentform", {});
        res.render('governmentform', {
            governmentforms: gov
        });
    } catch (e) {
        console.log(e);
    }
}