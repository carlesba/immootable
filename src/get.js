const curry = require('./curry')
const has = require('./has')
const keyPath = require('./key-path')

const get = (key, source) => keyPath(key).reduce(
  (value, key) => has(key, value) ? value[key] : undefined,
  source
)

module.exports = curry(get)
