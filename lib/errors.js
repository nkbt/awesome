'use strict';

var util = require('util');


var AbstractError = function (msg, constructor) {
	Error.captureStackTrace(this, constructor || this);
	this.message = msg || this.message || 'Error';
};
util.inherits(AbstractError, Error);
AbstractError.prototype.name = 'NPM Template Error';


var TemplateError = function (msg) {
	TemplateError.super_.call(this, msg, this.constructor);
};
util.inherits(TemplateError, AbstractError);
TemplateError.prototype.message = 'Template Error';


var OptionsRequiredError = function (msg) {
	OptionsRequiredError.super_.call(this, msg, this.constructor);
};
util.inherits(OptionsRequiredError, AbstractError);
OptionsRequiredError.prototype.message = 'Options required';


exports.Error = TemplateError;
exports.OptionsRequiredError = OptionsRequiredError;
