const curried = (callback, args, arity) => arity === 0
  ? callback.apply(this, args)
  : (...newArgs) =>
    curried(callback, [...args, ...newArgs], arity - newArgs.length)

const curry = callback => curried(callback, [], callback.length)

export default curry
