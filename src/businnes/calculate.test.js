const juros = require('./calculate')
const expect = require('chai').expect

describe('calculate interest', () => {
  it('calculate interest', () => {
    const result1 = juros.calculateInterest(1000, 0.01, 1)
    expect(result1).to.equal(1010)

    const result2 = juros.calculateInterest(1000, 0.02, 1)
    expect(result2).to.equal(1020)
  })
})
