import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })
})

//Test de Add
describe('Add' () => {
	test('Deberia 2 + 2 = 4' () => {
		expect(core.add(2, 2)).toBe(4);
	})
	test('Deberia 6 + 4 = 10' () => {
		expect(core.add(6, 4)).toBe(10);
	}]
})
