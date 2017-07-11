
const expect = require('chai').expect;
const request = require('supertest');
const app = require("./app");

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
