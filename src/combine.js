const pipe = require('./pipe')
const reverse = require('./reverse')
const apply = require('./apply')

const _combine = pipe(
  reverse,
  apply(pipe)
)

const combine = (...args) => _combine(args)

module.exports = combine
