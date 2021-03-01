"use strict";
const mon = require("../db/mongoWrap");
const dbServer = "localhost";
const dbName = "world";

exports.getLanguages = async function (res) {
    let languagesArr = [];
    try {
        let languages = await mon.retrieve(dbServer, dbName, "countrylanguage", {});
        languages.forEach(element => {
            languagesArr.push(element.language);
        });
        console.log(languagesArr);
        res.render('ranking', {
            title: "Country",
            languages: languages
        });
    } catch (e) {
        console.log(e);
    }
}
