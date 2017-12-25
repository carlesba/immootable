import get from './get'

describe('get', () => {
  it('returns value of an object given a valid path', () => {
    const source = { a: { b: { c: 1 } } }
    const result = get(['a', 'b', 'c'], source)
    expect(result).toBe(source.a.b.c)
  })
  it('returns the value given a key', () => {
    const source = { a: 1 }
    expect(get('a', source)).toBe(source.a)
  })
  it('works when currying', () => {
    const source = { a: { b: { c: 1 } } }
    const getABC = get(['a', 'b', 'c'])
    const result = getABC(source)
    expect(result).toBe(source.a.b.c)
  })
  it('returns undefined when value doesn\'t exist', () => {
    const source = { a: { b: { c: 1 } } }
    const result = get(['c', 'b', 'c'], source)
    expect(result).toBe(undefined)
  })
})
