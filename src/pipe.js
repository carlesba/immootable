const pipe = (...callbacks) => x =>
  callbacks.reduce((value, cb) => cb(value), x)

export default pipe
