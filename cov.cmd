node_modules\.bin\jscoverage lib lib-cov --exclude .jshintrc

set TEMPLATE_COV=1
set NODE_ENV=test

node_modules\.bin\mocha -b --reporter=html-cov > doc/coverage.html

set TEMPLATE_COV=0
set NODE_ENV=development
