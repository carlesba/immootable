import curry from './curry'

const prepend = (value, list) => [value].concat(list)

export default curry(prepend)
