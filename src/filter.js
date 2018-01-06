import curry from './curry'

const filter = (callback, list) => list.filter(callback)

export default curry(filter)
