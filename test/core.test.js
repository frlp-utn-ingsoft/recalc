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
    test('Deberia 10 + 6 = 16', () => {
        expect(core.add(10, 6)).toBe(16);
    })
})
