const {set} = require('../dist')

describe('set', () => {
  it('creates new object with value updated', () => {
    const source = {x: 1, y: []}
    const output = set('x', 2, source)
    expect(output.x).toBe(2)
    expect(source.x).toBe(1)
    expect(source.y).toBe(output.y)
  })
  it('works with arrays', () => {
    const source = ['a', 'b', {}]
    const output = set(1, 'cool', source)
    expect(output[0]).toBe(source[0])
    expect(output[1]).toBe('cool')
    expect(output[2]).toBe(source[2])
    expect(output).not.toBe(source)
  })
  it('modifies nested values as immutable', () => {
    const source = { a: { b: { c: 1 } }, aa: {} }
    const output = set(['a', 'b', 'c'], 2, source)
    expect(output.a.b.c).toBe(2)
    expect(output.a.b).not.toBe(source.a.b)
    expect(output.a).not.toBe(source.a)
    expect(output.aa).toBe(source.aa)
  })
  it('can curry', () => {
    const source = { a: { b: { c: 1 } }, aa: {} }
    const setABCto2 = set(['a', 'b', 'c'], 2)
    const output = setABCto2(source)
    expect(output.a.b.c).toBe(2)
    expect(output.a.b).not.toBe(source.a.b)
    expect(output.a).not.toBe(source.a)
    expect(output.aa).toBe(source.aa)
  })
})
