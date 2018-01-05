const {apply} = require('..')

describe('apply', () => {
  it('calls function with list of arguments', () => {
    const fun = (a, b, c) => [a, b, c]
    const result = apply(fun, [1, 2, 3])
    expect(result).toEqual([1, 2, 3])
  })
  it('can curry', () => {
    const fun = apply((a, b, c) => [a, b, c])
    const result = fun([1, 2, 3])
    expect(result).toEqual([1, 2, 3])
  })
})
