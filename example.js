var JSONe = require('./index')

console.log('stringify')
console.log(JSONe.stringify({ date: new Date(0), buffer: new Buffer([0, 1, 2]) }))
console.log('parse')
console.log(JSONe.parse(JSONe.stringify({ date: new Date(0), buffer: new Buffer([0, 1, 2]) })))