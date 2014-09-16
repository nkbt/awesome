'use strict';

var util = require('util');


var AwesomeError = function (msg, constructor) {
	Error.captureStackTrace(this, constructor || this);
	this.message = msg || this.message || 'Error';
};
util.inherits(AwesomeError, Error);
AwesomeError.prototype.name = 'Awesome Error';


var OptionsRequiredError = function (msg) {
	OptionsRequiredError.super_.call(this, msg, this.constructor);
};
util.inherits(OptionsRequiredError, AwesomeError);
OptionsRequiredError.prototype.message = 'Options required';


exports.Error = AwesomeError;
exports.OptionsRequiredError = OptionsRequiredError;
