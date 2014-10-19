# json-extended[![build status](https://secure.travis-ci.org/micnews/json-extended.png)](http://travis-ci.org/micnews/json-extended)

[![NPM](https://nodei.co/npm/json-extended.png?downloads&stars)](https://nodei.co/npm/json-extended/)

[![NPM](https://nodei.co/npm-dl/json-extended.png)](https://nodei.co/npm/json-extended/)

## Installation

```
npm install json-extended
```

## Example

### Input

```javascript
var JSONe = require('./index')

console.log('stringify')
console.log(JSONe.stringify({ date: new Date(0), buffer: new Buffer([0, 1, 2]) }))
console.log('parse')
console.log(JSONe.parse(JSONe.stringify({ date: new Date(0), buffer: new Buffer([0, 1, 2]) })))
```

### Output

```
stringify
{"date":"d1970-01-01T00:00:00.000Z","buffer":"bAAEC"}
parse
{ date: Wed Dec 31 1969 19:00:00 GMT-0500 (EST),
  buffer: <Buffer 00 01 02> }
```

## Licence

Copyright (c) 2014 Mic Network, Inc

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
