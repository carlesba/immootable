const {pipe} = require('..')

describe('pipe', () => {
  it('returns a function', () => {
    const result = pipe(
      function a () {},
      function b () {}
    )

    expect(typeof result).toBe('function')
  })
  it('calls every function with the outcome of the previous one', () => {
    const add1 = jest.fn(a => a + 1)
    const add2 = jest.fn(a => a + 2)
    const target = pipe(add1, add2)
    const result = target(0)
    expect(add1).toHaveBeenCalledWith(0)
    expect(add2).toHaveBeenCalledWith(1)
    expect(result).toBe(3)
  })
})
