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
    test('Deberia 3 * 3 = 9', () => {
    expect(core.mul(3, 3)).toBe(9); 
    })

    test('Deberia 8 * -6 = -48', () => {
        expect(core.mul(8, -6)).toBe(-48); 
    })
})

