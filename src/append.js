const curry = require('./curry')

const append = (value, list) => list.concat(value)

module.exports = curry(append)
