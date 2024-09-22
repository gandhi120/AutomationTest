const { addToArray } = require("./arrayUtils");

let testArray;

beforeAll(() => {
  console.log("before all test : initialize array");
  testArray = [];
});

afterAll(() => {
  console.log("after all test : clear array");
  testArray = null;
});

beforeEach(() => {
  console.log("before each all test :clear");
  testArray = [];
});

afterEach(() => {
  console.log("after each all test :clear");
  console.log("testArray ", testArray);
});

test("add item to array", () => {
  addToArray(testArray, "varun");
  expect(testArray).toContain("varun");
});
