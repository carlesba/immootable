const {omit} = require('..')

describe('omit', () => {
  describe('when passing an array', () => {
    it('filter the index pass as first argument', () => {
      const input = ['a', 'b', 'c']
      const output = omit(1, input)
      expect(output).toEqual(['a', 'c'])
    })
    it('also accepts a list of indexes', () => {
      const input = ['a', 'b', 'c']
      const output = omit([0, 1], input)
      expect(output).toEqual(['c'])
    })
    it('can curry', () => {
      const input = ['a', 'b', 'c']
      const omitFirstSecond = omit([0, 1])
      const output = omitFirstSecond(input)
      expect(output).toEqual(['c'])
    })
  })
  describe('when passing an object as second argument', () => {
    it('filter the key pass as first argument', () => {
      const input = { a: 'a', b: 'b' }
      const output = omit('a', input)
      expect(output).toEqual({ b: 'b' })
      expect(input.a).toBe('a')
    })
    it('also accepts a list of indexes', () => {
      const input = { a: 'a', b: 'b', c: 'c' }
      const output = omit(['a', 'c'], input)
      expect(output).toEqual({ b: 'b' })
    })
    it('can curry', () => {
      const input = { a: 'a', b: 'b', c: 'c' }
      const omitAC = omit(['a', 'c'])
      const output = omitAC(input)
      expect(output).toEqual({ b: 'b' })
    })
  })
})
