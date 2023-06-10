const { seed } = require('../src/seed.js')
const {
    createHistoryEntry,
    deleteFullHistory,
    History,
    Operation
} = require('../src/models.js')

beforeEach(async() => {
    await seed()
})

describe("History", () => {
    test("Deberia poder crear una resta en el history", async() => {
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
    })
})


describe("History", () => {
    test("Deberia poder eliminar el historial de la base de datos", async() => {
        await createHistoryEntry({
            firstArg: 5,
            secondArg: 2,
            result: 3,
            operationName: "SUB",
        });
        await createHistoryEntry({
            firstArg: 7,
            secondArg: 1,
            result: 6,
            operationName: "ADD",
        });

        await deleteFullHistory();
        const histories = await History.findAll();
        expect(histories.length).toEqual(0);
    });
});