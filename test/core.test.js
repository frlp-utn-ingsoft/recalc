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
    test('mul 1 * 2 to equal 2', () => {
        expect(core.mul(1, 2)).toBe(2);
    })
    
})


describe('Division', () => {
    test('3/4 debería = 0.75', () => {
        expect(core.div(3, 4)).toBe(0.75);
    })

    test('(-1)/10 debería = -0.1', () => {
        expect(core.div(-1,10)).toBe(-0.1);
    })

    test('La división por 0 no deberia devolver un valor', () => {
        expect(core.div(5,0)).toBe("No se puede dividir por 0");
    })
})
describe('Pow', () => {
    test('Deberia 4**2 = 16', () => {
        expect(core.pow(4)).toBe(16);
    })
})

describe('Add', () => {
    test('Deberia 10 + 6 = 16', () => {
        expect(core.add(10, 6)).toBe(16);
    })
})
