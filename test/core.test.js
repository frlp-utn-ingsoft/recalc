import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })
})

describe('Multiply', () => {
    test('Deberia 2 * 2 = 4', () => {
        expect(core.mul(2, 2)).toBe(4); 
    })

    test('Deberia 3 * 0 = 0', () => {
        expect(core.mul(3, 0)).toBe(0); 
    })

    test('Deberia 2 * -5 = -10', () => {
        expect(core.mul(2, -5)).toBe(-10); 
    })
})
