import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })
})

describe('Pow', () => {
    test('Deberia 0 ^ 2 = 0', () => {
        expect(core.pow(0)).toBe(0); 
    })

    test('Deberia 12 ^ 2 = 144', () => {
        expect(core.pow(12)).toBe(144); 
    })
})
