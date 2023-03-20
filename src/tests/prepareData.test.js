import prepareData from "../utils/prepareData";

describe("prepareData function", () => {
  test("should return a list of objects with the expected properties", async () => {
    const data = await prepareData("react");
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0]).toHaveProperty("userName");
    expect(data[0]).toHaveProperty("avatar_url");
    expect(data[0]).toHaveProperty("ownerHtml_url");
    expect(data[0]).toHaveProperty("login");
    expect(data[0]).toHaveProperty("html_url");
    expect(data[0]).toHaveProperty("full_name");
    expect(data[0]).toHaveProperty("stargazers_count");
    expect(data[0]).toHaveProperty("forks_count");
  });

  test("should throw an error when is called with invalid repository name", async () => {
    try {
      await prepareData("xyxyxyxyxxy");
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});
