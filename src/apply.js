import curry from './curry'

const apply = (callback, args) => callback.apply(undefined, args)

export default curry(apply)
