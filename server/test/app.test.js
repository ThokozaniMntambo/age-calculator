const assert = require("node:assert/strict");
const test = require("node:test");

const app = require("../app");

test("GET / reports that the API is running", async (t) => {
  const server = app.listen(0);
  t.after(() => server.close());

  await new Promise((resolve) => server.once("listening", resolve));
  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    message: "Student Manager API is running.",
  });
});
