import core from '../src/core.js'

describe('Add', () => {
    test('Deberia 2 + 6 = 8', () => {
        expect(core.add(2, 6)).toBe(8);
    })

    test('Deberia 150 + 40 = 190', () => {
        expect(core.add(150, 40)).toBe(190);
    })
})

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0);
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2);
    })
})

describe('Pow', () => {
    test('Debería 2 ^ 4 = 16', () => {
        expect(core.pow(2, 4)).toBe(16);
    })

    test('Debería 4 ^ 6', () => {
        expect(core.pow(4, 6)).toBe(4096);
    })
})

describe('Sub', () => {
    test('La resta de un número menor a uno mayor da como resultado un número negativo', () => {
        expect(core.sub(5, 10)).toBeLessThan(0);
      });
})