var parseRegexp = function (str) {
      var pattern = str.slice(str.indexOf('/') + 1, str.lastIndexOf('/'))
        , flags = str.slice(str.lastIndexOf('/') + 1)

      return new RegExp(pattern, flags)
    }

  , parseString = function (str) {

      if (str[0] === 'd') return new Date(str.slice(1))
      if (str[0] === 'b') return new Buffer(str.slice(1), 'base64')
      if (str[0] === 'r') return parseRegexp(str.slice(1))

      return str.slice(1)
    }

  , parse = function (input) {
      return JSON.parse(input, function (key, value) {
        if (typeof(value) === 'string') {
          return parseString(value)
        }

        return value
      })  
    }

module.exports = parse