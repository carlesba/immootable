const curry = require('./curry')

const apply = (callback, args) => callback.apply(undefined, args)

module.exports = curry(apply)
