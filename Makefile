SHELL := /bin/bash

JS_FILES=$(shell find src -type f -iname *.js)
JS_SRC=$(filter-out src/js/combined.index.min.js src/js/node_modules/% src/dist/% src/lib/%, $(call JS_FILES))

SRC=${JS_SRC}

scaffold:
	# Set up directory structure
	@test -d src/dist || mkdir -p src/dist
	@test -d test || mkdir -p test
	@test -d reports/cov || mkdir -p reports/cov
	@test -d reports/lint || mkdir -p reports/lint
	@test -d reports/codestyle || mkdir -p reports/codestyle
	@touch README.md

	# Set up git hooks
	@test -d .git/hooks || mkdir -p .git/hooks
	@ln -sf ../../support/hooks/pre-commit.sh .git/hooks/pre-commit
	@ln -sf ../../support/hooks/commit-msg.sh .git/hooks/commit-msg
	@ln -sf ../../support/hooks/pre-push.sh .git/hooks/pre-push

init: scaffold
	test -d ./node_modules || npm prune && \
		npm install

build: init
	# Build/compile code
	# node_modules/.bin/browserify src/index.js > src/dist/build.js
	npm run build

test: test-lint test-codestyle test-code test-coverage
	# Run code linting, style checks, automated tests and coverage tests

test-lint: init
	# linting javascript and check conformance to coding standards
	@set -o pipefail && \
		node_modules/.bin/eslint --color ${JS_SRC} | \
		tee reports/lint/eslint.txt

test-codestyle: init
	# check max line length
	@set -o pipefail && \
		./support/test/mllc.sh 100 ${SRC} 2>&1 | \
		tee reports/codestyle/linelength.txt

	# too many newlines check
	@set -o pipefail && \
		./support/test/newlines.sh ${SRC} 2>&1 | \
		tee reports/codestyle/indent.tx

test-code: init build
	# run functional test
	node_modules/.bin/mochify -R spec --phantomjs ./node_modules/.bin/phantomjs

test-coverage: init
	# generate code coverage reports
	npm run cover

	# check if code coverage reached minimum level
	node_modules/.bin/istanbul check-coverage --statements 95 \
		reports/cov/coverage-final.json

test-acceptance: init
	# Run automated acceptance tests

doc: init
	# generate documentation
	node_modules/.bin/jsdoc -c jsdoc.json --verbose ${JS_SRC}

clean:
	rm -rf node_modules/
	rm -rf gems/
	rm -rf reports/
	rm .git/hooks/pre-commit
	rm .git/hooks/commit-msg
	rm .git/hooks/pre-push
	rm src/dist/*

.PHONY: scaffold init test test-lint test-codestyle test-unit test-cov
	docs clean
