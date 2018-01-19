const curry = require('./curry')
const keyPath = require('./key-path')
const set = require('./set')

const update = (key, callback, source) => {
  const keys = keyPath(key)
  const [nextKey, ...rest] = keys
  const value = rest.length
    ? update(rest, callback, source[nextKey])
    : callback(source[nextKey])
  return set(nextKey, value, source)
}

module.exports = curry(update)
