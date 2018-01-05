import curry from './curry'

const append = (value, list) => list.concat(value)

export default curry(append)
