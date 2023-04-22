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

    const fn = core[fnName];

    const firstNum = await readline.question("Ingrese el primer número: ")
    const secondNum = await readline.question("Ingrese el segundo número: ")

    const result = fn(Number(firstNum), Number(secondNum));

    console.log(result);
    loop();
}

loop();
