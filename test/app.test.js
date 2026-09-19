const request = require("supertest");
const app = require("../server");

describe("Student Management Application", () => {

    test("Home page should return 200", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });

    test("Students API should return student data", async () => {
        const response = await request(app).get("/students");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

});