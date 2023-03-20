import getUser from "../utils/getUser";

describe("getUser function", () => {
  test("should return an object when is called with an username", async () => {
    const data = await getUser("fernastereo");
    expect(typeof data).toBe("object");
  });

  test("should return an object with the expected properties", async () => {
    const data = await getUser("fernastereo");
    expect(data).toHaveProperty("login");
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("name");
    expect(data).toHaveProperty("email");
    expect(data).toHaveProperty("company");
  });

  test("should throw an error when is called with an invalid username", async () => {
    try {
      await getUser("this-is-not-a-valid-user");
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});
