function add(a, b) {
  return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "No se puede dividir por 0";
  }
  return a / b;
}

function pow(a, b) {
  // no entiendo porque dice que esta funcion tiene un bug,
  //el usuario ingresa dos numeros
  //el primer numero puede ser la base y el segundo el exponente
  // es cierto que se podria dar esta informacion al usuario... pero mucha carpinteria

  return Math.pow(a, b);
}

export default {
  add: add,
  sub: subtract,
  mul: multiply,
  div: divide,
  pow: pow,
};
