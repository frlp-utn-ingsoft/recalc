const { seed } = require('../src/seed.js')
const {
    createHistoryEntry,
    History,
    Operation,
    getAllHistory,
    deleteAllHistory
} = require('../src/models.js')

beforeEach(async () => {
    await seed()
})

describe("History", () => {
    test("Deberia poder crear una resta en el history", async () => {
        await createHistoryEntry({
            firstArg: 2,
            secondArg: 2,
            result: 0,
            operationName: "SUB"
        })

        const histories = await History.findAll({
            include: [Operation]
        })

        expect(histories.length).toEqual(1)
        expect(histories[0].firstArg).toEqual(2)
        expect(histories[0].result).toEqual(0)
        expect(histories[0].Operation.name).toEqual("SUB")
    });  
    
    test("Se debe guardar el segundo argumento en la tabla history", async () => {
        await createHistoryEntry({
            firstArg: 6,
            secondArg: 4,
            result: 2,
            operationName: "SUB"
        })

        const histories = await History.findAll({
            include: [Operation]
        })

        expect(histories.length).toEqual(1)
        expect(histories[0].firstArg).toEqual(6)
        expect(histories[0].secondArg).not.toBeNull() // Si el segundo argumento es Nulo, no pasa el test.
        expect(histories[0].secondArg).toEqual(4)
        expect(histories[0].result).toEqual(2)
        expect(histories[0].Operation.name).toEqual("SUB")
    });

    test("Deberia traerme todo el historial", async () => {

        const histories = await History.findAll({
            include: [Operation]
        })

        const histories2 = await getAllHistory(); 

        expect(histories.length).toEqual(histories2.length)

        for (let i = 0; i < histories.length; i++) {
            expect(histories[i].firstArg).toEqual(histories2[i].firstArg)
            expect(histories[i].result).toEqual(histories2[i].result)
            expect(histories[i].Operation.name).toEqual(histories2[i].Operation.name)
        }
    });


    test("Deberia eliminar todo el historial", async () => {

        const histories = await History.findAll({
            include: [Operation]
        })

        if (histories.length > 0){

            await deleteAllHistory()
            
            expect(histories.length).toEqual(0);
        } 
    
    });

    test("Debería guardar el atributo 'error' en el historial", async () => {
        await createHistoryEntry({
            firstArg: 10,
            operationName: "DIV",
            error: "No se puede dividir por cero"
        });

        const histories = await History.findAll();

        expect(histories.length).toEqual(1);
        expect(histories[0].firstArg).toEqual(10);
        expect(histories[0].error).toEqual("No se puede dividir por cero");
    });

})
