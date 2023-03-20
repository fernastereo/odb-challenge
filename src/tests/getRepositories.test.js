import getRepositories from "../utils/getRepositories";

describe("getRepositories function", () => {
  test("should return an object when is called without arguments", async () => {
    const data = await getRepositories();
    expect(typeof data).toBe("object");
  });

  test("should return an object when is called with a repository name", async () => {
    const data = await getRepositories("react");
    expect(typeof data).toBe("object");
  });

  test("should return a list of repositories when is called with a repository name", async () => {
    const data = await getRepositories("react");
    expect(data.items).toBeDefined();
    expect(Array.isArray(data.items)).toBe(true);
    expect(data.items.length).toBeGreaterThan(0);
  });

  test("should throw an error when is called with invalid repository name", async () => {
    try {
      await getRepositories("xyxyxyxyxxy");
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});
