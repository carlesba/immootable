const {find} = require('..')

describe('find', () => {
  it('find element in a list', () => {
    const input = ['a', 'b']
    const fn = jest.fn(x => x === 'a')
    expect(find(fn, input)).toEqual('a')
    expect(fn).toHaveBeenCalledTimes(1)
  })
  it('can curry', () => {
    const input = ['a', 'b']
    const fn = jest.fn(x => x === 'b')
    const findB = find(fn)
    expect(findB(input)).toEqual('b')
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
