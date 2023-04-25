import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
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
