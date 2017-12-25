import curry from './curry'

const has = (key, source) => source && source[key] !== undefined
  ? true : false

export default curry(has)
