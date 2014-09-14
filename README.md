npm-template
=================

Template to be used to create NPM modules


### To update coverage report under Windows open terminal and run one by one:

	set TEMPLATE_COV=1
	set NODE_ENV=test
	node_modules\.bin\mocha -b --reporter=html-cov > doc/coverage.html
