import { createInterface } from "node:readline/promises";
import core from "./core.js"

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const AVAILABLE_FNS = [...Object.keys(core), 'exit'].join(', ')

async function loop() {
    const fnName = await readline.question(`Ingrese función (${AVAILABLE_FNS}): `)
 
    if (fnName === "exit") {
        console.log("👋👋👋");
        return readline.close();
    }
    else if(fnName!=="add" && fnName!=="sub" && fnName!=="mul" && fnName!=="div" && fnName!=="pow") {
        console.log("La funcion ingresada no esta disponible");
        loop();
    }

    const fn = core[fnName];

    let result
    if (fnName === "pow") {
        const num = await readline.question("Ingrese el número: ")
        result = fn(Number(num))
    }
    else {
        const firstNum = await readline.question("Ingrese el primer número: ")
        const secondNum = await readline.question("Ingrese el primer número: ")
        result = fn(Number(firstNum), Number(secondNum));
    }

    console.log(result)
    loop();
}

loop();
