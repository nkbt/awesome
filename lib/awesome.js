"use strict";

var _ = require('underscore');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var errors = require('./errors');

var defaults = {
	name: 'NPM Template'
};


function NpmTemplate(options) {

	this.options = _.clone(defaults);

	if (!_.isEmpty(options)) {
		this.setOptions(options);
	}

}

util.inherits(NpmTemplate, EventEmitter);


NpmTemplate.prototype.getOptions = function () {
	return this.options;
};


NpmTemplate.prototype.setOptions = function (options) {
	if (!_.isObject(options)) {
		return this.emit('error', new errors.OptionsRequiredError());
	}
	_.extend(this.options, _.pick.apply(null, [options].concat(_.keys(defaults))));

	return this.options;
};


NpmTemplate.errors = errors;

NpmTemplate.getDefaults = function () {
	return _.clone(defaults);
};


module.exports = exports = NpmTemplate;
