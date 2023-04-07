function add(a, b) {
    let resul=parseInt(a+b);
    return resul;
}

function subtract(a, b) {
    let resul=parseInt(a-b);
    return resul;
}

function multiply(a, b) {
}

function divide(a, b) {
    let resul=(a/b);
    return resul;
}

function pow(a) {
    let resul=parseInt(a**2);
    return resul;
}

export default {
    add: add,
    sub: subtract,
    mul: multiply,
    div: divide,
    pow: pow
}
