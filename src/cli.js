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
        } else {
            if (fnName!="add" && fnName!="sub" && fnName!="mul" && fnName!="div" && fnName!="pow") { // Resuelvo bug de que no se pueda elegir una funcion erronea
                console.log("La opción no es válida");
            } else {
                if (fnName=="pow") { // Resuelvo bug de funcion pow
                    const numPot = await readline.question("Ingrese el numero que quiere elevar al cuadrado: ");
                    console.log(core.pow(Number(numPot)));
                } else {
                    const firstNum = await readline.question("Ingrese el primer número: ");
                    const secondNum = await readline.question("Ingrese el segundo número: ");
                    switch(fnName) {
                        case "add":
                            console.log(core.add(Number(firstNum),Number(secondNum)));
                            break;
                        case "sub":
                            console.log(core.sub(Number(firstNum),Number(secondNum)));
                            break;
                        case "mul":
                            console.log(core.mul(Number(firstNum),Number(secondNum)));
                            break;
                        case "div":
                            console.log(core.div(Number(firstNum),Number(secondNum)));
                            break;
                    }
                }
            }
        }
        loop();
    }
    
loop();
