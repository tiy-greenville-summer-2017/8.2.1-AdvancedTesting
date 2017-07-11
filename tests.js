
const expect = require('chai').expect;
const request = require('supertest');
const app = require("./app");
const Cat = require("./models/cat");

describe("basic api endpoint data tests", () => {

  beforeEach(done => {
    Cat.insertMany([
      {name: "Skittles", fluffiness: 3},
      {name: "Garfield", fluffiness: 2},
      {name: "Princess cat face", fluffiness: 10}
    ]).then(done());
  });

  afterEach(done => {
    Cat.deleteMany({}).then(done());
  });

  it("cats api endpoint allows creation of cats", (done) => {
    request(app)
      .post("/api/cats")
      .send({name: "Pencylvester", fluffiness: 0})
      .expect(201)
      .expect(res => {
        Cat.count().then(count => {
          expect(count).to.equal(4);
        });
      })
      .end(done);
  });

  it("cats api endpoint returns all cats as json", (done) => {
    request(app)
      .get("/api/cats")
      .expect(200)
      .expect(res => {
        expect(res.body[0].name).to.equal("Skittles");
        expect(res.body[1].name).to.equal("Garfield");
        expect(res.body[2].name).to.equal("Princess cat face");
        expect(res.body.length).to.equal(3);
      }).end(done);
  });
});

describe("basic model tests", () => {

  beforeEach((done) => {
    Cat.deleteMany({}).then(done());
  });

  afterEach((done) => {
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
