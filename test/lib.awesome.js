"use strict";

var chai = require('chai');
chai.use(require('sinon-chai'));

var sinon = require('sinon');

var path = require('path');
var expect = require('chai').expect;
var NpmTemplate = require(path.join(__dirname, '..', 'index'));

describe('NPM Template', function () {


	it('should respond to [getOptions, setOptions] instance methods', function () {
		expect(NpmTemplate).to.respondTo('getOptions', 'setOptions');
	});


	it('should have [getDefaults] static method', function () {
		expect(NpmTemplate).itself.to.respondTo('getDefaults');
	});


	it('should have [errors] static property', function () {
		expect(NpmTemplate).to.have.property('errors');
	});


	it('should have default options pre-set', function () {
		var npmTemplate = new NpmTemplate();
		expect(npmTemplate.getOptions()).to.deep.equal(NpmTemplate.getDefaults());
	});


	it('should have options.name set to "Test"', function () {
		var npmTemplate = new NpmTemplate({name: 'Test'});
		expect(npmTemplate.getOptions().name).to.equal('Test');
	});


	it('should not set any unexpected options', function () {
		var npmTemplate = new NpmTemplate({hello: 'World'});
		expect(npmTemplate.getOptions()).not.to.have.keys('hello');
	});


	it('should emit OptionsRequiredError if no options passed', function () {
		var npmTemplate = new NpmTemplate(),
			errorSpy = sinon.spy();

		npmTemplate.on('error', errorSpy);

		npmTemplate.setOptions();
		expect(errorSpy).to.be.calledOnce;
	});


});
