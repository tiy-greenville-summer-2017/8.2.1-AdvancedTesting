
const expect = require('chai').expect;
const request = require('supertest');
const app = require("./app");
const Cat = require("./models/cat");

describe("basic model tests", () => {

  beforeEach((done) => {
    Cat.deleteMany({}).then(done());
  });

  after((done) => {
    Cat.deleteMany({}).then(done());
  });

  it("test should clean up after itself", (done) => {
    const cat = new Cat().save().then(newCat => {
      Cat.count().then(count => {
        expect(count).to.equal(1);
        done();
      });
    });
  });

  it("can create a cat in the db and find it with mongoose syntax", (done) => {
    const cat = new Cat({name: "mittens", fluffiness: 10})
     .save().then(newCat =>  {
       expect(newCat.name).to.equal("mittens");
       expect(newCat.fluffiness).to.equal(10);
     });
     done();
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
