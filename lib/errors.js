'use strict';

var util = require('util');


var NpmTemplateError = function (msg, constructor) {
	Error.captureStackTrace(this, constructor || this);
	this.message = msg || this.message || 'Error';
};
util.inherits(NpmTemplateError, Error);
NpmTemplateError.prototype.name = 'NPM Template Error';


var OptionsRequiredError = function (msg) {
	OptionsRequiredError.super_.call(this, msg, this.constructor);
};
util.inherits(OptionsRequiredError, NpmTemplateError);
OptionsRequiredError.prototype.message = 'Options required';


exports.Error = NpmTemplateError;
exports.OptionsRequiredError = OptionsRequiredError;
