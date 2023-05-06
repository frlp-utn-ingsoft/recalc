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
    test('3/4 debería = 0.75', () => {
        expect(core.div(3, 4)).toBe(0.75);
    })

    test('(-1)/10 debería = -0.1', () => {
        expect(core.div(-1,10)).toBe(-0.1);
    })
})