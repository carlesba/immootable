const curry = require('./curry')

const log = (parser, x) => {
  console.log(parser ? parser(x) : x)
  return x
}

module.exports = curry(log)
