'use strict';
var CFB = require('cfb');
module.exports = function (buf) {
	if (!buf || buf.length < 8) {
		return false;
	}
    var cfb = CFB.parse(buf);
    var WordDocument=cfb.find('WordDocument');
    if(!WordDocument && typeof(WordDocument)!="undefined" && WordDocument!==0){
        //can't find WordDocument
        return false;
    }
    var wIdent=WordDocument.content.readUInt16LE(0);
    return wIdent==0xa5ec;
};
