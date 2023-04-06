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

function pow(a) {
    return Math.pow(a,2)
}

export default {
    add: add,
    sub: substract,
    mul: multiply,
    div: divide,
    pow: pow
}
