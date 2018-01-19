const curry = require('./curry')

const find = (callback, list) => list.find(callback)

module.exports = curry(find)
