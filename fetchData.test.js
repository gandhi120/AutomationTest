//ASYNC UNIT TEST
const fetchData = require("./fetchData");
test("the data is chocolate using promises", () => {
  return fetchData().then((data) => {
    expect(data).toBe("chocolate");
  });
});

//using async await..
test("the data is chocolate using await", async () => {
  const data = await fetchData();
  expect(data).toBe("chocolate");
});

//async test...
test("ASYNC TEST", async () => {
  await expect(fetchData()).resolves.toBe("chocolate");
});
