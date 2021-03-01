var express = require('express');
var router = express.Router();
const modGovernmentform = require("../models/handleGovernmentform");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/governmentform', function(req, res, next) {
  modGovernmentform.getGovernmentforms(res);
});


/* GET home page. */
//router.get('/governmentforms', GovernmentformController.getGovernmentforms);


module.exports = router;
