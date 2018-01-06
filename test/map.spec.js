const {map} = require('..')

describe('map', () => {
  it('maps list', () => {
    const input = ['a', 'b']
    const fn = jest.fn(x => x + x)
    expect(map(fn, input)).toEqual(['aa', 'bb'])
    expect(fn).toHaveBeenCalledTimes(input.length)
  })
  it('can curry', () => {
    const input = ['a', 'b']
    const fn = jest.fn(x => x + x)
    const mapFn = map(fn)
    expect(mapFn(input)).toEqual(['aa', 'bb'])
    expect(fn).toHaveBeenCalledTimes(input.length)
  })
})
