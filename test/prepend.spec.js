const {prepend} = require('..')

describe('append', () => {
  it('returns the list with the value at the end', () => {
    const input = ['b']
    const output = prepend('a', input)
    expect(output).toEqual(['a', 'b'])
  })
  it('can curry', () => {
    const input = ['b']
    const prependA = prepend('a')
    const output = prependA(input)
    expect(output).toEqual(['a', 'b'])
  })
})
