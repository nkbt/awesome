node_modules\.bin\jscoverage lib lib-cov --exclude .jshintrc

set TEMPLATE_COV=1

node_modules\.bin\mocha -b --reporter=html-cov > doc/coverage.html

set TEMPLATE_COV=0
