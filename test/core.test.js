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
})