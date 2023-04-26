import core from '../src/core.js'

//Test de Substract
describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    });

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
 test_add
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

//Test de Multiply
describe('Multiply', () => {
    test('Deberia 2 * 2 = 4', () => {
        expect(core.mul(2, 2)).toBe(4); 
    })

    test('Deberia 5 * 3 = 15', () => {
        expect(core.mul(5, 3)).toBe(15); 
    })
    test('Deberia 0 * 5 = 0', () => {
        expect(core.mul(0, 5)).toBe(0); 
    })
    test('Deberia -3 * 4 = -12', () => {
        expect(core.mul(-3, 4)).toBe(-12); 
    })
})

 //Test de Division
 describe('Division', () => {
    test('Deberia 2 / 2 = 1', () => {
        expect(core.div(2,2)).toBe(1);
    })

    test ('Deberia 6 / 2 = 3', () => {
        expect(core.div(6,2)).toBe(3);
    })
    test('Deberia 10 / 5 = 2', () => {
        expect(core.div(10,5)).toBe(2);
    })
})
dev