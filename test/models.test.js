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

    test("Deberia poder guardar un error en el history", async () => {
        await createHistoryEntry({
            firstArg: 2,
            secondArg: "a",
            error: "Mensaje de Error",
            operationName: "DIV"
        })

        const histories = await History.findAll({
            include: [Operation]
        })

        expect(histories.length).toEqual(1)
        expect(histories[0].error).toEqual("Mensaje de Error")
        expect(histories[0].firstArg).toEqual(2)
        expect(histories[0].result).toEqual(null)
        expect(histories[0].Operation.name).toEqual("DIV")
    })
});
