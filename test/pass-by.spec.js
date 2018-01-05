const {passBy} = require('..')

describe('passBy', () => {
  describe('arity 1', () => {
    const mock = jest.fn()
    const first = passBy(mock)
    const output = first('input')
    it('calls the first argument with the second one', () => {
      expect(mock).toHaveBeenCalledWith('input')
    })
    it('returns the 2nd argument', () => {
      expect(output).toBe('input')
    })
  })
  describe('arity 2', () => {
    const mock = jest.fn()
    const output = passBy(mock, 'input')
    it('calls the first argument with the second one', () => {
      expect(mock).toHaveBeenCalledWith('input')
    })
    it('returns the 2nd argument', () => {
      expect(output).toBe('input')
    })
  })
})
