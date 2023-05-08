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
    test('Deberia 4 + 2 = 6', () => {
        expect(core.add(4, 2)).toBe(6); 
    })

    test('Deberia 5 + (-8) = -3', () => {
        expect(core.add(5, -8)).toBe(-3); 
    })

    test('Deberia 10 + (-2) = 8', () => {
        expect(core.add(10, -2)).toBe(8); 
    })

    test('Deberia 0 + 0 = 0', () => {
        expect(core.add(0, 0)).toBe(0); 
    })
