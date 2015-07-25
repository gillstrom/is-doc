# is-doc [![Build Status](https://travis-ci.org/gillstrom/is-doc.svg?branch=master)](https://travis-ci.org/gillstrom/is-doc)

> Check if a Buffer/Uint8Array is a `.doc` file.


## Install

```
$ npm install --save is-doc
```


## Usage

```js
var read = require('fs').readFileSync;
var isDoc = require('is-doc');

isDoc(read('foo.doc'));
//=> true
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
