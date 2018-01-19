const curry = require('./curry')

const passBy = (by, pass) => {
  by(pass)
  return pass
}

module.exports = curry(passBy)
