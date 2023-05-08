import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })
})

describe('Division', () => {

    test('Deberia 2 / 0 = Error', () => {
        expect(() => div(2, 0).toThrow('No se puede dividir por cero'));
    })

    test('Deberia 10 / 2 = 5', () => {
        expect(core.div(10, 2)).toBe(5);
    })

    test('Deberia 6 / 3 = 2', () => {
        expect(core.div(6, 3)).toBe(2);
    })

    test('Deberia 20 / 2 = 10', () => {
        expect(core.div(20, 2)).toBe(10);
    })
})
