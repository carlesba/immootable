import curry from './curry'

const find = (callback, list) => list.find(callback)

export default curry(find)
