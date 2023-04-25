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

describe('Add', () => {
    test('Deberia 2 + 5 = 7', () => {
        expect(core.add(2, 5)).toBe(7);
    })

    test('Deberia -5 + 5', () => {
        expect(core.add(-5, 5)).toBe(0)
    })
})


describe('divide', () => {
    test('Deberia 2 / 2 = 1', () => {
        expect(core.div(2, 2)).toBe(1); 
    })

    test('Deberia 12 / 0 = Math Error', () => {
        expect(core.div(12, 0)).toBe("Math Error"); 
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

