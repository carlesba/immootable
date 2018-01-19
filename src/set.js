const curry = require('./curry')
const get = require('./get')
const keyPath = require('./key-path')

const _set = (key, value, source) => Array.isArray(source)
  ? source.map((v, i) => i === key ? value : v)
  : ({ ...source, [key]: value })

const set = (key, value, source) => {
  const keys = keyPath(key)
  const [nextKey, ...rest] = keys
  const nextValue = rest.length === 0
    ? value
    : set(rest, value, get(nextKey, source))
  return _set(nextKey, nextValue, source)
}

module.exports = curry(set)
