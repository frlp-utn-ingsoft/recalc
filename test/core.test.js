import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })

    test('Deberia 6 - 9 = -3', () => {
      expect(core.sub(6, 9)).toBe(-3); 
    })
})

describe('Multiply', () => {
    test('debería multiplicar dos números positivos correctamente', () => {
        expect(core.mul(2, 2)).toBe(4);
      });

      test('debería multiplicar dos números negativos correctamente', () => {
        expect(core.mul(-2, -2)).toBe(4);
      });
      
      test('no debería permitir ingresar como parámetro valores no numericos', () => {
      expect(()=>{
          const result = core.mul("asd",2);
      }).toThrow();
      });
      
      test('la multiplicacíon debería cumplir con la propiedad de conmutativa', () => {
        expect(core.mul(2,3)).toBe(core.mul(3,2));
      });
      
      test('la multiplicacíon debería cumplir con la propiedad inversa', () => {
        expect(core.mul(2,1/2)).toBe(1);
      });
      
      test('la multiplicacíon debería cumplir con la propiedad de la anulación', () => {
        expect(core.mul(2,0)).toBe(0);
      });
      
      test('la multiplicacíon debería cumplir con la propiedad de la identidad', () => {
        expect(core.mul(2,1)).toBe(2);
      });

      test('debería multiplicar un número positivo y un número negativo correctamente', () => {
        expect(core.mul(2, -2)).toBe(-4);
      });
})

describe('Pow', () => {
    
  test('Los resultados de la potencia de exponente 2 son siempre números positivos cuando el número base es positivo', () => {
    expect(core.pow(2)).toBeGreaterThanOrEqual(0);
  });
    
  test('Si el número base es fraccionario, el resultado de la potencia de exponente 2 será también fraccionario', () => {
    expect(core.pow(2.65)).toBeCloseTo(7.02);
  });
  
  test('El resultado de la potencia de exponente 2 de cualquier número entero es siempre un número entero',()=>{
    expect(core.pow(2)).toBe(4);
  });
  
  test('Si el número base es cero, el resultado de la potencia de exponente 2 será siempre cero',()=>{
    expect(core.pow(0)).toBe(0);
  });
  
  test('Si el número base es 1, el resultado de la potencia de exponente 2 siempre será 1',()=>{
    expect(core.pow(1)).toBe(1);
  });
  
  test('Cualquier número elevado al exponente 2 es igual a ese número multiplicado por sí mismo',()=>{
    expect(core.pow(3)).toBe(3*3);
  });
  
  test('El cuadrado de un número impar es siempre un número impar',()=>{
    expect(core.pow(3) % 2).not.toBe(0);
  });
  
  test('El cuadrado de un número par es siempre un número par',()=>{
    expect(core.pow(2) % 2).toBe(0);
  });
  
  test('Los resultados de la potencia de exponente 2 son siempre números positivos cuando el número base es negativo', () => {
    expect(core.pow(-2)).toBeGreaterThanOrEqual(0);
  });

  test('Si la base ingresada por parametro no es un numero la funcion pow deberia volver error',()=>{
    expect(()=>{
      const result=core.pow('casa')
    }).toThrow();
  });
})

describe('Divide', () => {
  test('debería dividir dos números positivos correctamente', () => {
    expect(core.div(6, 2)).toBe(3);
  });

  test('debería dividir dos números negativos correctamente', () => {
    expect(core.div(-6, -2)).toBe(3);
  });
    
  test('no debería permitir ingresar como parámetro valores no numéricos', () => {
    expect(() => {
      const result = core.div("numero", 2);
    }).toThrow();
  });

  test('debería cumplir con la propiedad de la reciprocidad', () => {
    expect(core.div(2, 1/2)).toBe(4);
  });

  test('debería cumplir con la propiedad de la identidad', () => {
    expect(core.div(2, 1)).toBe(2);
  });

  test('debería dividir un número positivo y un número negativo correctamente', () => {
    expect(core.div(6, -2)).toBe(-3);
  });

  test('Deberia 6/0 = Error', () => {
      expect(core.div(6, 0)).toBe("No se puede dividir por 0"); 
  })
})



describe('Sum', () => {
  test('Suma de dos números positivos: 2 + 2 tiene que ser 4', () => {
    expect(core.add(2, 2)).toBe(4);
  });

  test('Sumar de dos números negativos: -2 + -2 debería ser -4', () => {
    expect(core.add(-2, -2)).toBeLessThan(0);

  });

  test('No se permiten valores no numéricos', () => {
    expect(() => {
      const result = core.add("numero", 2);
    }).toThrow();

  });

  test('Propiedad conmutativa: 2 + 3 = 3 + 2', () => {
    expect(core.add(2, 3)).toBe(core.add(3, 2));
  });

  test('Propiedad inversa: 2 + -2 = 0 ', () => {
    expect(core.add(2, -2)).toBe(0);
  });

  test('Propiedad de la identidad: 2 + 0 = 2', () => {
    expect(core.add(2, 0)).toBe(2);

  });
});

describe('Mock Multiplicacion', () => {
  test('Deberia multiplicar 2 numeros', () => {

    const mockMultiplicacion = jest.fn(core.mul);
    const result = mockMultiplicacion(2, 3);

    expect(mockMultiplicacion).toHaveBeenCalled();
    expect(mockMultiplicacion).toHaveBeenCalledWith(2, 3);
    expect(result).toBe(6);
  });
});
