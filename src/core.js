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

        return "No se puede dividir por cero";
    }

    return a / b;
}

function pow(a, b) {

    return a ** b;
}

function sqr(a) {
    return Math.sqrt(a);
}

function bin(a) {
    return a.toString(2);
}

export default {
    add: add,
    sub: subtract,
    mul: multiply,
    div: divide,
    pow: pow,
    sqr: sqr,
    bin: bin,
}