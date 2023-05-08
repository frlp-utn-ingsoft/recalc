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

describe('Multiply', () => {
    test('Deberia 4 * 4 = 16', () => {
        expect(core.mul(4, 4)).toBe(16); 
    })

    test('Deberia 2 * 0 = 0', () => {
        expect(core.mul(2, 0)).toBe(0); 
    })

    test('Deberia 5 * -3 = -15', () => {
        expect(core.mul(5, -3)).toBe(-15); 
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
})
