var express = require('express');
var router = express.Router();
const modContinent = require("../models/handleContinent");
const modLanguage = require("../models/handleLanguage");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/continent', function(req, res, next) {
  modContinent.getContinents(res);
});


router.post('/continent', function(req, res, next){
  modContinent.getContinentsLanguage(res, req.body.continent);
});


/* GET users listing. */
router.get('/ranking', function(req, res, next) {
  modLanguage.getLanguages(res);
});

module.exports = router;
