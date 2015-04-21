/**
 * @project dummy
 * Dummy server to test CI/CD infrastructure.
 * @file app.js
 * Primary application driver
 * @author curtis zimmerman
 * @contact software@curtisz.com
 * @license AGPLv3
 * @version 1.0.0
 */

module.exports = (function() {
	"use strict";

	// third party
	var express       = require('express');
	// auxiliary
	var $app          = express();

	$app.use('/', function(req, res) {
		res.send('SUCCESS');
	});
	$app.listen(process.env.DUMMY_PORT || 80);

	console.log('+++++++< dummy listening >+++++++');
})();
