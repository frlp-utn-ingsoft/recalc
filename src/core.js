function add(a, b) {
}

function subtract(a, b) {
}

function multiply(a, b) {
}

const divide = (a, b) => a/b;

function pow(a, b) {
    let result = a;
    for (let i = 1; i<b;i++){
        result = result * a;
    }
    return result;
}

export default {
    add: add,
    sub: subtract,
    mul: multiply,
    div: divide,
    pow: pow
}
