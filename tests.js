
const expect = require('chai').expect;
const request = require('supertest');
const app = require("./app");
const Cat = require("./models/cat");

describe("basic model tests", () => {
  it("can create a cat in the db and find it with mongoose syntax", () => {
    const cat = new Cat({name: "mittens", fluffiness: 10}).save();
  });
});

describe("basic api endpoint tests", () => {
  it("can access api endpoint and get success back", (done) => {
    request(app)
      .get("/api/sanity")
      .expect(200, {hello: "joel"}, done);
  });
});

describe("sanity test", () => {
  it("should run test", () => {
    expect(1).to.not.equal(2);
  });
});
