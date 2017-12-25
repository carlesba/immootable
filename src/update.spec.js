import update from './update'

describe('update', () => {
  it('creates new object setting the value with the updater function', () => {
    const source = {x: 1, y: []}
    const updater = jest.fn(() => 'foo')
    const output = update('x', updater, source)
    expect(output.x).toBe('foo')
    expect(source.x).toBe(1)
    expect(source.y).toBe(output.y)
    expect(updater).toHaveBeenCalledWith(1)
  })
  it('works with arrays', () => {
    const source = ['a', 'b', {}]
    const updater = jest.fn(() => 'foo')
    const output = update(1, updater, source)
    expect(output[0]).toBe(source[0])
    expect(output[1]).toBe('foo')
    expect(output[2]).toBe(source[2])
    expect(output).not.toBe(source)
    expect(updater).toHaveBeenCalledWith('b')
  })
  it('modifies nested values as immutable', () => {
    const source = { a: { b: { c: 1 } }, aa: {} }
    const updater = jest.fn(() => 'foo')
    const output = update(['a', 'b', 'c'], updater, source)
    expect(output.a.b.c).toBe('foo')
    expect(output.a.b).not.toBe(source.a.b)
    expect(output.a).not.toBe(source.a)
    expect(output.aa).toBe(source.aa)
    expect(updater).toHaveBeenCalledWith(1)
  })
  it('can curry', () => {
    const source = { a: { b: { c: 1 } }, aa: {} }
    const updater = jest.fn(() => 'foo')
    const setABCto2 = update(['a', 'b', 'c'], updater)
    const output = setABCto2(source)
    expect(output.a.b.c).toBe('foo')
    expect(output.a.b).not.toBe(source.a.b)
    expect(output.a).not.toBe(source.a)
    expect(output.aa).toBe(source.aa)
    expect(updater).toHaveBeenCalledWith(1)
  })
})
