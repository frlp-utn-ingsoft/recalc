import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })

    test('Deberia 3 - 6 < 0', ()=>{
        expect(core.sub(3, 6)).toBeLessThan(0);
    })
})

describe('Pow', () => {
     test('Deberia 0 = 0', () => {
            expect(core.pow(0)).toBe(0);
        })

    test('Deberia 2 = 4', () => {
        expect(core.pow(2)).toBe(4);
    })

    test('Deberia 6 = 36', () => {
        expect(core.pow(6)).toBe(36);
    })
})

describe('Div', () => {
    test('Should be true that a/b > a', () => {
        let a = Math.floor(Math.random() * 100);
        let b = Math.floor(Math.random() * 100) + 1;
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

    test('Should be true that c < 0 when |a| > b and a < 0', () => {
        let a = -50;
        let b = 30;
        expect(core.add(a,b)).toBeLessThan(0);
    })

    test('Should be true that c > 0 when b > |a| and b > 0', () => {
        let a = -30;
        let b = 50;
        expect(core.add(a,b)).toBeGreaterThan(0);
    })
})
