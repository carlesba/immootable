const curry = require('./curry')

const insert = (index, value, list) => [
  ...list.slice(0, index),
  value,
  ...list.slice(index, list.length)
]

module.exports = curry(insert)
