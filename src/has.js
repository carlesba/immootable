import curry from './curry'

const has = (key, source) => !!(source && source[key] !== undefined)

export default curry(has)
