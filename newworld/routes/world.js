var express = require('express');
var router = express.Router();
const mon = require("../db/mongoWrap");
const modGovernmentform = require("../models/handleGovernmentForm");
const modCountry = require("../models/handleCountry");


/* GET users listing. */
router.get('/', function(req, res, next) {
	modCountry.getCountries(res);
});


/* GET users listing. */
router.get('/createWorld', function(req, res, next) {
    modGovernmentform.getGovernmentAndContinentsforms(res);
});



router.post('/regworld', async function(req, res, next) {
	modCountry.postCountry(req,res,next);
	/*mon.upsert("localhost", "world", "countries", req.body, {name: req.body.name} )
		.then ( function (rc) {
			if (rc)
				res.render('regworld', { title: 'World db update', returnCode: rc });
			else	
				res.redirect('/');
		});*/
});



module.exports = router;
