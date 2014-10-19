var test = require('tape')

  , JSONe = require('./index')

test('simple', function (t) {
  var input = {
          beep: new Buffer('boop')
        , object: {
              d: new Date(0)
            , r: /foo/gim
          }
        , array: [ new Buffer([ 0, 1, 2, 3, 4, 5 ]) ]
        , string: ':d:beep-boop'
      }
    , output = JSONe.parse(JSONe.stringify(input))

  t.deepEqual(output, input)
  t.equal(output.object.r.global, true)
  t.equal(output.object.r.ignoreCase, true)
  t.equal(output.object.r.multiline, true)
  t.end()
})
