const request = require('supertest');
const api = require('../src/api.js');
const { seed } = require('../src/seed.js');
const { Operation } = require('../src/models.js');

beforeEach(async () => {
    await seed()
})

describe("API substract", () => {
    test("Deberia responder con un 200 ok", async () => {
        const app = await api.build()

        return request(app).get('/api/v1/sub/2/1')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8")
            .then( (res) => {
                expect(res.body.result).toEqual(1);
            })
    })
})


describe("API add", () => {
    test("Deberia responder con un 200 ok", async () => {
        const app = await api.build()

        return request(app).get('/api/v1/add/4/-2')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8")
            .then((res) => {
                expect(res.body.result).toBeLessThan(4);
            })
        
    });
})
