const pipe = (...callbacks) => x =>
  callbacks.reduce((value, cb) => cb(value), x)

module.exports = pipe
