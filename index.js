'use strict';
var CFB = require('cfb');

module.exports = function (buf) {
    if (!buf || buf.length < 8) {
        return false;
    }
    
    try{
        var cfb = CFB.parse(buf);
        var doc = cfb.find('WordDocument');
        if (!doc) {
            return false;
        }
        
        return doc.content.readUInt16LE(0) === 0xa5ec;
    }catch(e){
        return false;
    }
};
