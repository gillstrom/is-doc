'use strict';
var path = require('path');
var test = require('ava');
var isDoc = require('../');
var read = require('fs').readFileSync;
test(function (t) {
	t.plan(3);
    var buf=path.join(__dirname, 'fixtures/test.doc');
    var buf2=path.join(__dirname, 'fixtures/test.xls');
    var buf3=path.join(__dirname, 'fixtures/test.ppt');
    t.assert(isDoc(read(buf)));
    t.assert(!isDoc(read(buf2)));
    t.assert(!isDoc(read(buf3)));
});