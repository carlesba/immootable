const curry = require('./curry')

const filter = (callback, list) => list.filter(callback)

module.exports = curry(filter)
