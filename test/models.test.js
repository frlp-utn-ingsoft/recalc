const { seed } = require('../src/seed.js')
const {
    createHistoryEntry,
    History,
    Operation,
    getAllHistory
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
    })
})

describe("getHistory", () => {
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
    })
})