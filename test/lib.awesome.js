"use strict";

var chai = require('chai');
chai.use(require('sinon-chai'));

var sinon = require('sinon');

var path = require('path');
var expect = require('chai').expect;
var Awesome = require(path.join(__dirname, '..', 'index'));

describe('Awesome', function () {


  it('should respond to [getOptions, setOptions] instance methods', function () {
    expect(Awesome).to.respondTo('getOptions', 'setOptions');
  });


  it('should have [getDefaults] static method', function () {
    expect(Awesome).itself.to.respondTo('getDefaults');
  });


  it('should have [errors] static property', function () {
    expect(Awesome).to.have.property('errors');
  });


  it('should have default options pre-set', function () {
    var awesome = new Awesome();
    expect(awesome.getOptions()).to.deep.equal(Awesome.getDefaults());
  });


  it('should have options.name set to "Test"', function () {
    var awesome = new Awesome({name: 'Test'});
    expect(awesome.getOptions().name).to.equal('Test');
  });


  it('should not set any unexpected options', function () {
    var awesome = new Awesome({hello: 'World'});
    expect(awesome.getOptions()).not.to.have.keys('hello');
  });


  it('should emit OptionsRequiredError if no options passed', function () {
    var awesome = new Awesome(),
      errorSpy = sinon.spy();

    awesome.on('error', errorSpy);

    awesome.setOptions();
    expect(errorSpy).to.be.calledOnce;
  });


});
