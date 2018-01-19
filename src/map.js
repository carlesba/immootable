const curry = require('./curry')

const map = (callback, list) => list.map(callback)

module.exports = curry(map)
