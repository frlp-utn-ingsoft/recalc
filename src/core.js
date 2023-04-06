function add(a, b) {
    return a+b
}

function substract(a, b) {
    return a-b
}

function multiply(a, b) {
    return a*b
}

function divide(a, b) {
    if ( b != 0 ){
        return a/b;
    } else {
        return "Error: Division por cero";
    }
}

function pow(a, b) {
}

export default {
    add: add,
    sub: substract,
    mul: multiply,
    div: divide,
    pow: pow
}
