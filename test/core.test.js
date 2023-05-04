import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })
})
describe('Div', () => {
    test('Should be true that a/b > a', () => {
        let a = Math.floor(Math.random() * 100);
        let b = Math.floor(Math.random() * 100);
        expect(core.div(a,b)).toBeLessThan(a);
    })    

    test("Should throw 'No se puede dividir entre 0!' with b = 0", () => {
        let a = Math.floor(Math.random() * 100);
        let b = 0;
        expect(() => core.div(a,b)).toThrow("No se puede dividir entre 0!"); 
    })
    
    test("Should be true that a/b > a when  1 > b > 0  ", () => {
        let a = Math.floor(Math.random() * 100);
        let b = Math.random();
        expect(core.div(a,b)).toBeGreaterThan(a); 
    }) 
})