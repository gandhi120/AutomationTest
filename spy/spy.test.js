//spy..

const myModule = require("./spy");
test("should spy on function and check if it is called", () => {
  const spy = jest.spyOn(myModule, "myFunction");
  myModule.myFunction();
  expect(spy).toHaveBeenCalled();
});
