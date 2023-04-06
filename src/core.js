function add(a, b) {
}

function subtract(a, b) {
}

function multiply(a, b) {
    if (a===0 || b===0) {
        return " 0 "
    }
    return (a * b) 
}

function divide(a, b) {
    if (b===0){
        return "Math Error"
    }
    else{
        return a/b
    }
}

function pow(a, b) {
}

export default {
    add: add,
    sub: subtract,
    mul: multiply,
    div: divide,
    pow: pow
}
