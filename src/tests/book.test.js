const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
require("dotenv").config();

beforeEach(async() => {
    await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
});

afterEach(async() => {
    await mongoose.connection.close();
})


describe("GET: /api/books/", () => {
    it("should get all books", async() => {
        const response = await request(app).get("/api/books/");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0); // data should exist
    });
});

describe("GET: /api/books/:id", () => {
    it("should get a book", async() => {
        const response = await request(app).get("/api/books/63904c71f9c9539fe78588c8");
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe("Salt: A World History");
    })
})
