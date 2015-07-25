'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 8) {
		return false;
	}

	return buf[0] === 0xD0 && buf[1] === 0xCF && buf[2] === 0x11 && buf[3] === 0xE0 && buf[4] === 0xA1 && buf[5] === 0xB1 && buf[6] === 0x1A && buf[7] === 0xE1;
};
