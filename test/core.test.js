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
    test('Should be true that a+b > a', () => {
        let a = Math.floor(Math.random() * 50);
        let b = Math.floor(Math.random() * 50);
        expect(core.add(a,b)).toBeGreaterThan(a);
    })

    test('Should be true that a+b > b', () => {
        let a = Math.floor(Math.random() * 50);
        let b = Math.floor(Math.random() * 50);
        expect(core.add(a,b)).toBeGreaterThan(b);
    })

    test('Should be true that a+b < a or b if both numbers are negative', () => {
        let a = Math.floor(Math.random() * -50);
        let b = Math.floor(Math.random() * -50);
        expect(core.add(a,b)).toBeLessThan(a);
        expect(core.add(a,b)).toBeLessThan(b);
        expect(core.add(a,b)).toBeLessThan(0);
    })
})
