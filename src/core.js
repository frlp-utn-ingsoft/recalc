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

    if ( b === 0 ) {

	return "No se puede dividir por cero";
    }
    else{

	return a / b;
    }
}

function pow(a, b) {
    return a ** b;
}

export default {
    add: add,
    sub: subtract,
    mul: multiply,
    div: divide,
    pow: pow,
}
