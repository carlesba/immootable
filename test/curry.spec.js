const {curry} = require('..')

describe('curry', () => {
  it('arity 1', () => {
    const listed = a => [a]
    const curriedListed = curry(listed)
    expect(curriedListed(1)).toEqual([1])
  })
  it('arity N', () => {
    const listed = (a, b, c) => [a, b, c]
    const curriedListed = curry(listed)
    const firstArgument = curriedListed(1)
    const secondArgument = firstArgument(2)
    const result = secondArgument(3)
    expect(result).toEqual([1, 2, 3])
    expect(typeof firstArgument).toBe('function')
    expect(typeof secondArgument).toBe('function')
  })
  it('multiple arguments with arity N', () => {
    const listed = (a, b, c) => [a, b, c]
    const curriedListed = curry(listed)
    const result = curriedListed(1, 2, 3)
    expect(result).toEqual([1, 2, 3])
  })
})
