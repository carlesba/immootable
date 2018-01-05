import curry from './curry'

const insert = (index, value, list) => [
  ...list.slice(0, index),
  value,
  ...list.slice(index, list.length)
]

export default curry(insert)
