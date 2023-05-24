const request = require("supertest");
const api = require("../src/api.js");
const {seed} = require("../src/seed.js");

beforeEach(async () => {
  await seed();
});

describe("API substract", () => {
  test("Deberia responder con un 200 ok", async () => {
    const app = await api.build();

    const res = await request(app)
      .get("/api/v1/sub/2/1")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");

    expect(res.body.resultado).toEqual(1);
  });
});

describe("API add", () => {
  test("Deberia responder con un 200 ok", async () => {
    const app = await api.build();

    const res = await request(app)
      .get("/api/v1/add/2/1")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");

    expect(res.body.resultado).toEqual(3);
  });

  test("Si el segundo parametro es negativo, resultado deberia ser menor al primer parametros", async () => {
    const app = await api.build();
    const a = 11;
    const b = -8;

    const res = await request(app)
      .get(`/api/v1/add/${a}/${b}`)
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");

    expect(res.body.resultado).toBeLessThan(a);
  });
});
