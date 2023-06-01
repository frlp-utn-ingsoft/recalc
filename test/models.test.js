const { seed } = require('../src/seed.js')
const {
    createHistoryEntry,
    History,
    Operation,
    getHistory,
    eraseHistory
} = require('../src/models.js')
const { json } = require('body-parser')

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

    test("Debería traer el historial desde la DB", async () => {
        //Primero creo entradas en la base de datos

        const entries = [
            {
              firstArg: 45,
              secondArg: 14,
              operationName: 'ADD',
              result: 59
            },
            {
              firstArg: 9,
              secondArg: 3,
              operationName: 'DIV',
              result: 3
            },
            {
              firstArg: 7,
              secondArg: 2,
              operationName: 'MUL',
              result: 14
            }
          ];
      
          // Crear las entradas de prueba en la base de datos
          for(let i = 0; i < entries.length; i++)
          {
            await createHistoryEntry(entries[i])
          }

        //Obtengo el historial
        const dbHistory = await getHistory()

        //compruebo que el historial me devuelva un objeto
        expect(dbHistory).toEqual(expect.any(Object))

        //compruebo que devuelva al menos un objeto        
        expect(dbHistory.length).toBeGreaterThan(0)

        //compruebo que el objeto esté definido
        for (let i = 0; i < dbHistory.length; i++) {
            const element = dbHistory[i];

            expect(element.firstArg).toBeDefined()
            expect(element.secondArg).toBeDefined()
            expect(element.result).toBeDefined()
            expect(element.Operation.name).toBeDefined()
            
        }
        
    })
})
