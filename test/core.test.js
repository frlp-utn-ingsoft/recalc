import core from '../src/core.js'

//Test de Substract
describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    });

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    });

	test('Deberia 2 - 4 = Negativo', () => {
		expect(core.sub(2, 4)).toBeLessThan(0);
	});
});

//Test de Add
describe('Add', () => {
	test('Deberia 2 + 2 = 4', () => {
		expect(core.add(2, 2)).toBe(4);
	});

	test('Deberia 6 + 4 = 10', () => {
		expect(core.add(6, 4)).toBe(10);
	});
});
