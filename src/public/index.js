const $display = document.querySelector('.display')
const $buttons = document.querySelector('.buttons')

const operations = ['-', '*', '+'];

let currentDisplay = "";
let operation = null;
let reset = false;

let unused;

$buttons.addEventListener('click', async (e) => {
    const nextAction = e.target.name

    if (nextAction === "=") {

        //Verificar si currentDisplay está vacío
        if (currentDisplay === "") {
            return;
        }
        
        const [firstArg, secondArg] = currentDisplay.split(operation)

        let result;

        if (operation === "-") {
            result = await calculateSub(firstArg, secondArg)
        }

        if (operation === "+") {
            result = await calculateAdd(firstArg, secondArg)
        }

        if (operation === "*") {
            result = await calculateMul(firstArg, secondArg)
        }


        reset = true;
        return renderDisplay(result);
    }

    if (operations.includes(nextAction)) {
        operation = nextAction;
    }

    if (reset) {
        reset = false;
        operation = null;
        renderDisplay(nextAction);
    } else {
        renderDisplay(currentDisplay + nextAction);
    }
})

async function calculateSub(firstArg, secondArg) {
    const resp = await fetch(`/api/v1/sub/${firstArg}/${secondArg}`)
    const { result } = await resp.json();

    return result;
}

async function calculateAdd(firstArg, secondArg) {
    const resp = await fetch(`/api/v1/add/${firstArg}/${secondArg}`)
    const { result } = await resp.json();

    return result;
}

async function calculateMul(firstArg, secondArg) {
    const resp = await fetch(`/api/v1/mul/${firstArg}/${secondArg}`)
    const { result } = await resp.json();

    return result;
}


function renderDisplay(chars) {
    currentDisplay = chars;
    $display.value = chars;
}

function rerender() { }
