const { seed } = require('../src/seed.js')
const {
    createHistoryEntry,
    deleteFullHistory,
    obtenerHistorialBaseDatos,
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
        expect(histories[0].secondArg).toEqual(2)
        expect(histories[0].result).toEqual(0)
        expect(histories[0].Operation.name).toEqual("SUB")
    })
})

describe("History", () => {
    test("Deberia utilizar el nuevo campo de error al intentar dividir por cero", async() => {
        await createHistoryEntry({
            firstArg: 4,
            secondArg: 0,
            result: null,
            error: "No se puede dividir por cero",
            operationName: "DIV"
        })

        const histories = await History.findAll({
            include: [Operation]
        })

        expect(histories.length).toEqual(1)
        expect(histories[0].firstArg).toEqual(4)
        expect(histories[0].result).toEqual(null)
        expect(histories[0].error).toEqual("No se puede dividir por cero")
        expect(histories[0].Operation.name).toEqual("DIV")
    })
})

describe("History", () => {
    test("Deberia utilizar el nuevo campo de error al obtener un resultado mayor a 100000", async() => {
        await createHistoryEntry({
            firstArg: 55,
            secondArg: 5,
            result: null,
            error: "No se puede obtener un resultado tan grande",
            operationName: "POW"
        })

        const histories = await History.findAll({
            include: [Operation]
        })

        expect(histories.length).toEqual(1)
        expect(histories[0].firstArg).toEqual(55)
        expect(histories[0].result).toEqual(null)
        expect(histories[0].error).toEqual("No se puede obtener un resultado tan grande")
        expect(histories[0].Operation.name).toEqual("POW")
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

describe("History", () => {
    test("Deberia poder mostrar el historial de la bbdd", async() => {

        const History = await obtenerHistorialBaseDatos();

        expect(History).toBeDefined(); // Verificar que se haya obtenido algún resultado
        expect(Array.isArray(History)).toBe(true); // Verificar que el historial sea un arreglo
    });
});

describe("History", () => {
    test("Deberia poder guardar el segundo parámetro en el history", async() => {
        await createHistoryEntry({
            firstArg: 5,
            secondArg: 7,
            result: 12,
            operationName: "ADD"
        })

        const histories = await History.findAll({
            include: [Operation]
        })

        expect(histories[0].secondArg).toEqual(7)
    })
})