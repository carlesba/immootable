import curry from './curry'

const map = (callback, list) => list.map(callback)

export default curry(map)
