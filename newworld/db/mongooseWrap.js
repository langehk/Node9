"use strict";
/*
 * wrapper for CRUD functionality of a mongodb
 */
const mongoose = require('mongoose');

const conparam = { useNewUrlParser: true, useUnifiedTopology: true };



const connect = async function(url, dbn){
    const constr = `mongodb://${url}:27017/${dbn}`;
    await mongoose.connect(constr, conparam);
    return mongoose.connection;
}


exports.retrieve = async function(Model, query) {
    let stuff = null;
    const db = await connect("localhost", "world");

    db.once("open", function () { 
        console.log("Connected")
    });
    try {
        stuff = await Model.find(query);
    } catch(err) {
        console.log(error);
    } finally {
        db.close();
        return stuff;
    }
}


exports.retrieveAndSort = async function (Model, sort) {

    const db = await connect("localhost", "world");
    let stuff = null;

    db.once("open", function () { 
        console.log("Connected")
    });
    
    try {
        stuff = await Model.find({}, null, sort); 

    } catch (err) {
        console.log(err);
    } finally {
        db.close();
        return stuff;
    }
}

exports.retrieveDistinct = async function (query) {
    const db = await connect("localhost", "world");
    let stuff = null;
    
    db.once("open", function () {
        console.log("Connected")
    });

    stuff = await db.collection("countrylanguage").distinct(query);
    return stuff
}


exports.upsert = async function (obj) {
    const db = await connect("localhost", "world");

    db.once("open", function () { 
        console.log("Connected")
    });

    try {
        await obj.save();
        db.close();
    } catch (e) {
        console.log(e);
    }
}

exports.retrieveAggregate = async function(Model, query) {
    const db = await connect("localhost", "world");

    let stuff = null;
    try {
        stuff = await Model.aggregate({$group: {language: "$language", count : {$sum:1}}});
        console.log(stuff);
        //stuff = await db.collection(coll).aggregate([{$group: {language: "$language", count : {$sum:1}}}]).toArray();
        
    } catch(err) {
        console.log(error);
    } finally {
        db.close();
        return stuff;
    }
}