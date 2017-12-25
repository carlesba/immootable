import curry from './curry'
import keyPath from './key-path'
import set from './set'

const update = (key, callback, source) => {
  const keys = keyPath(key)
  const [nextKey, ...rest] = keys
  const value = rest.length
    ? update(rest, callback, source[nextKey])
    : callback(source[nextKey])
  return set(nextKey, value, source)
}

export default curry(update)
