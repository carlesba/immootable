const curry = require('./curry')

const defaultTo = (defValue, source) => source || defValue

module.exports = curry(defaultTo)
