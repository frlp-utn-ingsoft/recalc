import { DEFAULT_EXTENSIONS } from '@babel/core';
import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })

})


describe('Suma', () => {
    test('Deberia 10 + 12 = 22', () => {
        expect(core.add(10, 12)).toBe(22); 
    })

})

describe('Divide', () => {
    test('Deberia 2 / 2 = 1', () => {
        expect(core.div(2, 2)).toBe(1); 
    })
})

