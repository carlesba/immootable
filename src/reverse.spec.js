import reverse from './reverse'

describe('reverse', () => {
  it('returns a new array reversed', () => {
    const a = [1, 2, 3]
    const reversedA = reverse(a)
    expect(a).toEqual([1, 2, 3])
    expect(reversedA).toEqual([3, 2, 1])
  })
})
