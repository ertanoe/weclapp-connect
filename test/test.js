'use strict';

var expect = require('chai').expect;
var testFnc = require('../index');

describe('#testFnc', function() {
    it('pass output msg here', function() {
        var result = test(10, 20);
        expect(result).to.equal(30);
    });
});