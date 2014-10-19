
var iterate = function (value) {
      if (typeof(value) === 'string') return 's' + value

      if (typeof(value) !== 'object' || value === null) return value
      if (Array.isArray(value)) return value.slice(0).map(iterate)
      if (value instanceof Date) return 'd' + value.toJSON()
      if (value instanceof RegExp) return 'r' + value.toString()
      if (Buffer.isBuffer(value)) return 'b' + value.toString('base64')

      // value is a plain object
      return Object.keys(value).reduce(function (copy, key) {
        copy[key] = iterate(value[key])
        return copy
      }, {})
    }

  , stringify = function (obj) {
      return JSON.stringify(iterate(obj))
    }

module.exports = stringify
