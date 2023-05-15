import { Operation, createTables } from "./models.js";

async function seed() {
    await createTables()
    Operation.bulkCreate([
        { name: "ADD" },
        { name: "SUB" },
        { name: "MUL" },
        { name: "DIV" },
        { name: "POW" },
    ])
}

seed()