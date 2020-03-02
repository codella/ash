import { head } from "./head";

describe("head", () => {
  it("returns the head of a non-empty array", () => {
    const result = head([1]);
    expect(result).toBe(1);
  });
});
