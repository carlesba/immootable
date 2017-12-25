import curry from './curry'

const defaultTo = (defValue, source) => source || defValue

export default curry(defaultTo)
