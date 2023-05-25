const { seed } = require('../src/seed.js')
const {
    createHistoryEntry,
    obtenerHistorialBaseDatos,
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
    })
})

 describe("History", () => {
    test("Deberia poder mostrar el historial de la bbdd", async () => {
        
        const History = await obtenerHistorialBaseDatos();

        expect(History).toBeDefined(); // Verificar que se haya obtenido algún resultado
        expect(Array.isArray(History)).toBe(true); // Verificar que el historial sea un arreglo
    });
}); 

