import { Calculator } from '../src/calculator'

describe('calculate', function() {
    it('add', function() {
        let result = Calculator.Sum(5, 2)
        expect(result).toBe(7)
    })
})

describe('calculator.Divide', function() {
    it('divide', () => expect(Calculator.Divide(5, 2)).toBe(2.5))

    it('divide1', function() {
        expect(() => Calculator.Divide(5, 0)).toThrow(`Second argument can not be 0`)
    })

    it('divide2', function() {
        expect(Calculator.Divide).toThrow(`Second argument can not be 0`)
    })
})