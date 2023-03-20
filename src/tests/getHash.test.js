import getHash from "../utils/getHash";

describe("getHash function", () => {
  test("returns the correct value when a valid hash string is provided", () => {
    const hash = "#/valid/url";

    expect(getHash(hash)).toBe("/valid");
  });

  test("returns the default value when no valid hash is provided", () => {
    expect(getHash("")).toBe("/");
  });
});
