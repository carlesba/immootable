const curried = (callback, args, arity) => arity === 0
  ? callback.apply(undefined, args)
  : (...newArgs) =>
    curried(callback, [...args, ...newArgs], arity - newArgs.length)

const curry = callback => curried(callback, [], callback.length)

module.exports = curry
