import curry from './curry'
import has from './has'
import keyPath from './key-path'

const get = (key, source) => keyPath(key).reduce(
  (value, key) => has(key, value) ? value[key] : undefined,
  source
)

export default curry(get)
