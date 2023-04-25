import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })
})

describe('Multiply', () => {
    test('debería multiplicar dos números positivos correctamente', () => {
        expect(core.mul(2, 2)).toBe(4);
      });
        
      test('debería multiplicar un número positivo y un número negativo correctamente', () => {
        expect(core.mul(2, -2)).toBe(-4);
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
        expect(core.mul(2,3)).toBe(multiply(3,2));
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
})
