import curry from './curry'
import keyPath from './key-path'

const omitList = (k, s) => s.filter(
  (_, i) => k.indexOf(i) < 0
)

const omitObject = (keys, s) => keys.reduce(
  (o, k) => {
    delete o[k]
    return o
  },
  Object.assign({}, s)
)

const omit = (keys, source) => Array.isArray(source)
  ? omitList(keyPath(keys), source)
  : omitObject(keyPath(keys), source)

export default curry(omit)
