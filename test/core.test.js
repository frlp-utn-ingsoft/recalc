import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })
})

describe('Prueba de la función suma', () => {

  // Suma de numeros naturales
  test('La suma de 2 + 3 debe ser igual a 5', () => {
    expect(core.add(2, 3)).toBe(5);
  });

  // Suma con numeros negativos
  test('La suma de -1 + 1 debe ser igual a 0', () => {
    expect(core.add(-1, 1)).toBe(0);
  });

  // Suma de numeros con coma
  test('La suma de 0.1 + 0.2 debe ser igual a 0.3', () => {
    expect(core.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

});

