npm-template
=================

Template to be used to create NPM modules

## Usage

```bash
mkdir my-module
cd my-module
git init
git remote add template https://github.com/nkbt/npm-template.git
git pull template master
# change 'npm-template' to 'my-module'
git commit -m "Init"
git remote add origin git@github.com:<me>/my-module.git
git push -u origin master
```

## Features

1. Configurable module template
1. Custom Errors
1. Initial tests
1. Documentation (tests-based) with embedded coverage report


## NPM scripts

```bash
$ npm run
Available scripts in the npm-template package:
  test
    grunt
  doc
    JS_COV=1 grunt cov && grunt doc

```

```bash
$ npm run test

> npm-template@0.0.0 test /Users/nkbt/npm-template
> grunt

Running "jshint:gruntfile" (jshint) task
>> 1 file lint free.

Running "jshint:lib" (jshint) task
>> 2 files lint free.

Running "jshint:test" (jshint) task
>> 3 files lint free.

Running "mochacli:test" (mochacli) task
1..7
ok 1 NPM Template should respond to [getOptions, setOptions] instance methods
ok 2 NPM Template should have [getDefaults] static method
ok 3 NPM Template should have [errors] static property
ok 4 NPM Template should have default options pre-set
ok 5 NPM Template should have options.name set to "Test"
ok 6 NPM Template should not set any unexpected options
ok 7 NPM Template should emit OptionsRequiredError if no options passed
# tests 7
# pass 7
# fail 0

Done, without errors.
```

```bash
$ npm run doc

> npm-template@0.0.0 doc /Users/nkbt/nkbt/npm-template
> JS_COV=1 grunt cov && grunt doc

Running "jscoverage:src" (jscoverage) task

Running "mochacli:coverage" (mochacli) task

Done, without errors.
Running "mochacli:doc" (mochacli) task

Running "concat:doc" (concat) task
File doc/index.html created.

Done, without errors.
```

## Generated documentation

[https://rawgit.com/nkbt/npm-template/master/doc/index.html]