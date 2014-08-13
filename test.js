'use strict';
var assert = require('assert');
var xmlChars = require('./');

it('should match valid XML Character Classes characters', function () {
	assert(xmlChars.letter.test('unicorn'));
	assert(xmlChars.digit.test('0'));
	assert(!xmlChars.letter.test('#'));
});
