import { createInterface } from "node:readline/promises";
import core from "./core.js"

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const AVAILABLE_FNS = [...Object.keys(core), 'exit'].join(', ')

async function loop() {
    
    var fnName = await readline.question(`Ingrese función (${AVAILABLE_FNS}): `)

    while (!Object.keys(core).includes(fnName)) {
        if (fnName === "exit") {
            console.log("👋👋👋");
            return readline.close();
        }
        console.log(fnName + 'no es una opción válida');
        fnName = await readline.question(`Ingrese una opción válida (${AVAILABLE_FNS}): `)
    } 
    

    const fn = core[fnName];
<<<<<<< HEAD
    
    if(fnName == "pow"){
	const num = await readline.question("Ingrese la base a elevar: ")
	
	var result = fn(Number(num))
	}
    else{
	const firstNum = await readline.question("Ingrese el primer número: ")
    	const secondNum = await readline.question("Ingrese el segundo número: ")

    	var result = fn(Number(firstNum), Number(secondNum));	
	}

=======

    if(fnName == "pow"){
        const num = await readline.question("Ingrese la base a elevar: ")
        
        var result = fn(Number(num))
        }
        else{
        const firstNum = await readline.question("Ingrese el primer número: ")
            const secondNum = await readline.question("Ingrese el segundo número: ")
    
            var result = fn(Number(firstNum), Number(secondNum));	
        }
        
>>>>>>> 48598210a207b6c81dd001a387af73457b1fe2c9
    console.log(result);
    loop();
}

loop();
