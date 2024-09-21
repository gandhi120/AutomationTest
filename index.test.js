const multiply = require("./index");

//TEST SUITE

describe("Multiply Test", () => {
  test("2 and 5 multiply equal 10", async () => {
    expect(multiply(2, 5)).toBe(10); //exact equally.
  });

  test("2 and 5 multiply not equal 4", async () => {
    expect(multiply(2, 5)).not.toBe(4); //exact equally.===
  });
});

describe("Object equality Test", () => {
  test("Object equality", () => {
    const data = { alpha: "A" };
    data["beta"] = "B";
    expect(data).toEqual({ alpha: "A", beta: "B" }); // deep equality ==
  });
});

//NULL check...
describe("Null value test", () => {
  test("Null check", () => {
    const value = null;
    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).not.toBeTruthy();
    expect(value).toBeFalsy();
  });
});

//Number comparison

describe("Number comparison", () => {
  test("Number test", () => {
    const value = 3 + 3;
    expect(value).toBeGreaterThan(5); //>
    expect(value).toBeGreaterThanOrEqual(5); //>=
    expect(value).toBeLessThan(7); //<
    expect(value).toBeLessThanOrEqual(7); //<=
    expect(value).toEqual(6); //==
    expect(value).toBe(6); //====

    //float value check...
    const floatValue = 0.2 + 0.1;
    expect(floatValue).toBeCloseTo(0.3, 5); //====

    //string check...
    expect("developer").not.toMatch(/I/);
  });
});

//Array  test...
describe("Array  test", () => {
  test("Array test check", () => {
    const todoList = [
      "Buy chocolate",
      "clean room",
      "subscribe",
      "like",
      "comment",
    ];
    expect(todoList).toContain("subscribe");
  });
});

//Exception matchers...
describe("Exception matchers  test", () => {
  test("Exception matchers test check", () => {
    function openInvalidFile(params) {
      throw new Error("File Not Found");
    }
    expect(() => openInvalidFile()).toThrow();
    expect(() => openInvalidFile()).toThrow("File Not Found");
    expect(() => openInvalidFile()).not.toThrow(/not found/);
  });

  test("drinks without returns", () => {
    const drink = jest.fn(() => true);
    drink();
    expect(drink).toHaveReturned();
  });

  test("drinks with returns", () => {
    const drink = jest.fn(() => true);
    drink();
    expect(drink).toHaveReturnedWith(true);
  });
});
