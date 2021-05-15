const juros = require('./juros')
const expect = require('chai').expect

describe('Módulo juros', () => {
  it('calcular juros composto', () => {
    const result1 = juros.calculoJuros(1000, 0.01, 1)
    expect(result1).to.equal(1010)

    const result2 = juros.calculoJuros(1000, 0.02, 1)
    expect(result2).to.equal(1020)
  })
})
