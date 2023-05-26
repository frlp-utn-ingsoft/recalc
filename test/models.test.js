const { seed } = require('../src/seed.js')
const {
    createHistoryEntry,
    History,
    Operation
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
            error: null,
            operationName: "SUB"
        })

        const histories = await History.findAll({
            include: [Operation]
        })

        expect(histories.length).toEqual(1)
        expect(histories[0].firstArg).toEqual(2)
        expect(histories[0].result).toEqual(0)
        expect(histories[0].error).toBeNull()
        expect(histories[0].Operation.name).toEqual("SUB")
        
    })

    test("Debería poder guardar información de error en el history", async () => {
        const entry = {
            firstArg: 5,
            secondArg: 0, 
            result: null,
            operationName: "DIV",
            error: "División por cero" 
        };
    
        await createHistoryEntry(entry);
    
        const histories = await History.findAll({
        include: [Operation]
        });
    
        expect(histories.length).toEqual(1);
        expect(histories[0].firstArg).toEqual(5);
        expect(histories[0].result).toBeNull();
        expect(histories[0].Operation.name).toEqual("DIV");
        expect(histories[0].error).toEqual("División por cero"); 
    })
})
