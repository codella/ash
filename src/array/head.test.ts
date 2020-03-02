import { head } from "./head";

describe("head", () => {
  it("returns undefined as the head of an empty array", () => {
    const result = head([]);
    expect(result).toBe(undefined);
  });

  it("returns the head of an array with a single element", () => {
    const result = head([1]);
    expect(result).toBe(1);
  });

  it("returns the head of an array with multiple elements", () => {
    const result = head([1, 2]);
    expect(result).toBe(1);
  });
});
