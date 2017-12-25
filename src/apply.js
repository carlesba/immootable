import curry from './curry'

const apply = (callback, args) => callback.apply(this, args)

export default curry(apply)
