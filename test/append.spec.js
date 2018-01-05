const {append} = require('..')

describe('append', () => {
  it('returns the list with the value at the end', () => {
    const input = ['a']
    const output = append('b', input)
    expect(output).toEqual(['a', 'b'])
  })
  it('can curry', () => {
    const input = ['a']
    const appendB = append('b')
    const output = appendB(input)
    expect(output).toEqual(['a', 'b'])
  })
})
