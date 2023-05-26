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
            operationName: "SUB",
            error:""
        })

        const histories = await History.findAll({
            include: [Operation]
        })

        expect(histories.length).toEqual(1)
        expect(histories[0].firstArg).toEqual(2)
        //Arreglar el bug que hace que no se guarde el segundo parametro en la tabla History y hacer el test correspondiente
        expect(histories[0].secondArg).toEqual(2)
        expect(histories[0].result).toEqual(0)
        expect(histories[0].Operation.name).toEqual("SUB")
        //. Hacer un test que compruebe que el nuevo atributo efectivamente se guarde en la base de datos.
        expect(histories[0].error).toEqual("")
    })
})

describe("History", () => {
    test("Debería devolver todo el historial", async() => {
        await createHistoryEntry({
            firstArg: 10,
            secondArg: 5,
            result: 5,
            operationName: "SUB"
        });
        await createHistoryEntry({
            firstArg: 4,
            secondArg: 2,
            result: 2,
            operationName: "SUB"
        });
        const histories = await History.count();
        const histories_deleted = await History.destroy({ where: {}});
        expect(histories_deleted).toEqual(histories);
    });
});
