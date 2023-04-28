import { createInterface } from "node:readline/promises";
import core from "./core.js"


const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const AVAILABLE_FNS = [...Object.keys(core), 'exit'].join(',')

async function loop() {
    var fnName = await readline.question(`Ingrese función (${AVAILABLE_FNS}): `)

    const VALIDATION_ARRAY = AVAILABLE_FNS.split(",")
    if (VALIDATION_ARRAY.includes(fnName)) {
        if (fnName === "exit") {
            console.log("👋👋👋");
            return readline.close();
        }


        const fn = core[fnName];
        const regex = /[a-z]/
        if (fnName !== 'pow') {

            const firstNum = await readline.question("Ingrese el primer número: ");
            if (firstNum.match(regex) !== null) {
                console.log('ERROR: Debe ingresar un NUMERO! \n')
                loop()
            }
            const secondNum = await readline.question("Ingrese el segundo número: ")
            if (secondNum.match(regex) !== null) {
                console.log('ERROR: Debe ingresar un NUMERO! \n')
                loop()
            }
            try{
                const result = fn(Number(firstNum), Number(secondNum))
                console.log(result);
            } catch (e){
                console.log(e);
            }
        } else {
            const num = await readline.question("Ingrese el número: ");
            if (num.match(regex) !== null) {
                console.log('ERROR: Debe ingresar un NUMERO! \n')
                loop()
            }
            const resultpow = fn(Number(num))
            console.log(resultpow);
        }

    } else {
        console.log(`❌ Ingrese un nombre de funcion valido ❌(${AVAILABLE_FNS})`);
    }
    loop();
}

loop();
