const {defaultTo} = require('../dist')

describe('defaultTo', () => {
  it('returns the default value when value is falsy', () => {
    expect(defaultTo('default', false)).toBe('default')
    expect(defaultTo('default', null)).toBe('default')
    expect(defaultTo('default', undefined)).toBe('default')
  })
  it('returns the value when is truly', () => {
    expect(defaultTo('foo', 1)).toBe(1)
    expect(defaultTo('foo', [])).toEqual([])
  })
  it('can curry', () => {
    const defaultTo23 = defaultTo(23)
    expect(defaultTo23(1)).toBe(1)
    expect(defaultTo23(false)).toBe(23)
  })
})
