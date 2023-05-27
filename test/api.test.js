const request = require('supertest');
const api = require('../src/api.js');
const { seed } = require('../src/seed.js')

beforeEach(async() => {
    await seed()
})


describe("API substract", () => {
    test("Deberia responder con un 200 ok", async() => {
        const app = await api.build()

        return request(app)
            .get('/api/v1/sub/2/1')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8")
            .then((res) => {

                expect(res.body.result).toEqual(1);
            });
    })
})

/*
describe("API multiplication with await", () => {
    test("Deberia responder con un 200 ok", async () => {
        const app = await api.build()

	const res = await request(app)

	    .get('/api/v1/mul/2.5/2.5')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8")

	expect(res.body.result).toEqual(6.25);

    })
})
*/

describe("API multiplication", () => {
    test("Deberia responder con un 200 ok", async() => {
        const app = await api.build()

        return request(app)
            .get('/api/v1/mul/2.5/2.5')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8")
            .then((res) => {
                expect(res.body.result).toEqual(6.25);
            });
    })
})

describe("API division", () => {
    test("Deberia responder con un 400 Error", async() => {
        const app = await api.build()

        return request(app)
            .get('/api/v1/div/2/0')
            .expect(400)
            .expect('Content-Type', "application/json; charset=utf-8")
            .then((res) => {
                expect(res.body.error).toEqual("No se puede dividir por cero")
            })

    })
})

describe("API addition", () => {
    test("Deberia responder con un 200 ok", async() => {
        const app = await api.build()

        return request(app)
            .get('/api/v1/add/4/-5')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8")
            .then((res) => {

                expect(res.body.result).toBeLessThan(4);
            })
    })
})

describe("API pow", () => {
    test("Deberia responder con un 400 Error", async() => {
        const app = await api.build()

        return request(app)
            .get('/api/v1/pow/a/b')
            .expect(400)
            .expect('Content-Type', "application/json; charset=utf-8")
            .then((res) => {
                expect(res.body.error).toEqual("Uno de los parámetros no es un número");
            });
    })
})

describe("API square root", () => {
    test("Deberia responder con un 200 ok", async() => {
        const app = await api.build()

        return request(app)
            .get('/api/v1/sqr/4')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8")
            .then((res) => {

                expect(res.body.result).toBe(2);
            })
    })
})

describe("API binary", () => {
    test("Deberia responder con un 200 ok", async() => {
        const app = await api.build()

        return request(app)
            .get('/api/v1/bin/2')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8")
            .then((res) => {

                expect(res.body.result).toBe('10');
            })
    })
})