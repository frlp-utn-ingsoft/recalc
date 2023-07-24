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

    if (fnName !== "add" && fnName !== "sub" && fnName !== "mul" && fnName !== "div" && fnName !== "pow" && fnName !== "sqr" && fnName !== "bin"){
        console.log("Función inválida, intente nuevamente.");
        loop();
    }

    const fn = core[fnName];

    if (fnName === "sqr" || fnName === "bin"){
        const firstNum = await readline.question("Ingrese el número: ")

        if(!isNaN(firstNum)){
            const result = fn(Number(firstNum));
            console.log(result);
            loop();
        }else{
            console.log('Debe ingresar únicamente números.');
            loop();
            }
    }else{

        const firstNum = await readline.question("Ingrese el primer número: ")
        const secondNum = await readline.question("Ingrese el segundo número: ")

        if (!isNaN(firstNum) && !isNaN(secondNum)){

        const result = fn(Number(firstNum), Number(secondNum));

        console.log(result);
        loop();

        }else{
        console.log('Debe ingresar únicamente números.');
        loop();
        }
    }
}

loop();
