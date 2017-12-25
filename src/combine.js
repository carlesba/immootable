import pipe from './pipe'
import reverse from './reverse'
import apply from './apply'

const _combine = pipe(
  reverse,
  apply(pipe)
)

const combine = (...args) => _combine(args)

export default combine
