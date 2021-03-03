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

module.exports = router;
