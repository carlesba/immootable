import has from './has'

describe('has', () => {
  it('returns true when the value is not undefined', () => {
    const source = {x: 1, y: null}
    expect(has('x', source)).toBe(true)
    expect(has('y', source)).toBe(true)
  })
  it('returns false when source or the value is undefined', () => {
    const source = {x: 1, y: null}
    expect(has('z', source)).toBe(false)
    expect(has('y', null)).toBe(false)
  })
  it('can curry', () => {
    const source = {x: 1, y: null}
    const hasX = has('x')
    expect(hasX(source)).toBe(true)
  })
})
