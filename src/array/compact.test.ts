import { compact } from "./compact";

describe("compact", () => {
  it("keeps objects", () => {
    const result = compact([{}]);
    expect(result).toStrictEqual([{}]);
  });

  it("keeps non-zero values", () => {
    const result = compact([1]);
    expect(result).toStrictEqual([1]);
  });

  it("keeps non-empty strings", () => {
    const result = compact(["x"]);
    expect(result).toStrictEqual(["x"]);
  });

  it("keeps symbols", () => {
    const symbol = Symbol();
    const result = compact([symbol]);
    expect(result).toStrictEqual([symbol]);
  });

  it("keeps boolean value true", () => {
    const result = compact([true]);
    expect(result).toStrictEqual([true]);
  });

  it("removes false", () => {
    const result = compact([false]);
    expect(result).toStrictEqual([]);
  });

  it("removes null", () => {
    const result = compact([null]);
    expect(result).toStrictEqual([]);
  });

  it("removes 0 (zero)", () => {
    const result = compact([0]);
    expect(result).toStrictEqual([]);
  });

  it("removes '' (empty string)", () => {
    const result = compact([""]);
    expect(result).toStrictEqual([]);
  });

  it("removes undefined", () => {
    const result = compact([undefined]);
    expect(result).toStrictEqual([]);
  });

  it("removes NaN", () => {
    const result = compact([NaN]);
    expect(result).toStrictEqual([]);
  });
});
