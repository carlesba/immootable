const curry = require('./curry')

const has = (key, source) => !!(source && source[key] !== undefined)

module.exports = curry(has)
