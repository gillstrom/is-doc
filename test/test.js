'use strict';
var path = require('path');
var test = require('ava');
var isDoc = require('../');
var read = require('fs').readFile;
test(function (t) {
    t.plan(8);
    var file1 = path.join(__dirname, 'fixtures/test.doc');
    var file2 = path.join(__dirname, 'fixtures/test.xls');
    var file3 = path.join(__dirname, 'fixtures/test.ppt');
    var file4 = path.join(__dirname, 'fixtures/test.txt');
    read(file1, function (err, data) {
        t.assert(!err, err);
        t.assert(isDoc(data));
    });
    read(file2, function (err, data) {
        t.assert(!err, err);
        t.assert(!isDoc(data));
    });
    read(file3, function (err, data) {
        t.assert(!err, err);
        t.assert(!isDoc(data));
    });
    read(file4, function (err, data) {
        t.assert(!err, err);
        t.assert(!isDoc(data));
    });
});
