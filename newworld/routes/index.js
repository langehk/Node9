var express = require('express');
var router = express.Router();
const handler = require("../models/handler");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/continent', function(req, res, next) {
  handler.getContinents(res);
});

router.get('/continent/:continent', function(req, res, next) {
  handler.getContinentsLanguage(res, req.params.continent);
});

router.post('/continent', function(req, res, next){
  handler.getContinentsLanguage(res, req.body.continent);
});


/* GET users listing. */
router.get('/ranking', function(req, res, next) {
  handler.getLanguagesAndRanking(res);
});

/* GET users listing. */
router.get('/ranking/searchRanking', function(req, res, next) {
  handler.GetSearchRanking(res);
});

/* GET users listing. */
router.post('/ranking', function(req, res, next) {
  handler.searchRanking(res, req.body.language);
});

/* GET users listing. */
router.get('/group', function(req, res, next) {
  handler.GetGroupedCountries(res);
});






module.exports = router;
