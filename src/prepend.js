const curry = require('./curry')

const prepend = (value, list) => [value].concat(list)

module.exports = curry(prepend)
