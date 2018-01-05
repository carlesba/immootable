const {insert} = require('..')

describe('insert', () => {
  it('returns the list with the value at the end', () => {
    const input = ['a', 'c']
    const output = insert(1, 'b', input)
    expect(output).toEqual(['a', 'b', 'c'])
  })
  it('can curry', () => {
    const input = ['a', 'c']
    const insertAt1 = insert(1)
    const insertBat1 = insertAt1('b')
    const output = insertBat1(input)
    expect(output).toEqual(['a', 'b', 'c'])
  })
})
