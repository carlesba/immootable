const {filter} = require('..')

describe('filter', () => {
  it('filter elements in a list', () => {
    const input = ['a', 'b']
    const fn = jest.fn(x => x === 'a')
    expect(filter(fn, input)).toEqual(['a'])
    expect(fn).toHaveBeenCalledTimes(input.length)
  })
  it('can curry', () => {
    const input = ['a', 'b']
    const fn = jest.fn(x => x === 'b')
    const filterB = filter(fn)
    expect(filterB(input)).toEqual(['b'])
    expect(fn).toHaveBeenCalledTimes(input.length)
  })
})
