import { createInterface } from "node:readline/promises";
import core from "./core.js"

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const allFnsNames = Object.keys(core);

const AVIABLE_FNS = [...allFnsNames, 'exit'].join(', ')

async function loop() {
    const fnName = await readline.question(`Ingrese función (${AVIABLE_FNS}): `)

    if (fnName === "exit") {
        console.log("👋👋👋");
        return readline.close();
    }

    if(!allFnsNames.includes(fnName)){
        console.log("Funcion invalida, intente nuevamente");
        loop();
    }

    const fn = core[fnName];

    const firstNum = await readline.question("Ingrese el primer número: ")
    const secondNum = fnName ==="pow" ? null : await readline.question("Ingrese el segundo número: ")

    const result = fnName === "pow"? fn(Number(firstNum)) : fn(Number(firstNum), Number(secondNum));

    console.log(result);
    loop();
}

loop();
