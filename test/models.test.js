const { seed } = require('../src/seed.js')
const {
    createHistoryEntry,
    History,
    eraseHistory,
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

    test("Deberia poder guardar el segundo parametro en la base de datos", async () => {
        await createHistoryEntry({
            firstArg: 10,
            secondArg: 8,
            result: 2,
            operationName: "SUB"
        })
        const histories = await History.findAll({
            include: [Operation]
        })
        expect(histories.length).toEqual(1)
        expect(histories[0].firstArg).toEqual(10)
        expect(histories[0].secondArg).toEqual(8)
        expect(histories[0].result).toEqual(2)
        expect(histories[0].Operation.name).toEqual("SUB")
    })


    test("deberia poder eliminar el historial", async () => {

        await createHistoryEntry({
            firstArg: 2,
            secondArg: 2,
            result: 0,
            operationName: "SUB"
        })

        await eraseHistory({})

        const histories = await History.findAll({})

        expect(histories.length).toEqual(0)
    })
})
