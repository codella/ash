import { chunk } from "./chunk";

describe("chunk", () => {
  it("chunks an empty array", () => {
    const result = chunk([]);
    expect(result).toStrictEqual([]);
  });

  it("chunks an array with a single element", () => {
    const result = chunk([1], 1);
    expect(result).toStrictEqual([[1]]);
  });

  it("chunks an array of 2 elements with size 1", () => {
    const result = chunk([1, 2], 1);
    expect(result).toStrictEqual([[1], [2]]);
  });

  it("chunks an array of 2 elements with size 2", () => {
    const result = chunk([1, 2], 2);
    expect(result).toStrictEqual([[1, 2]]);
  });

  it("chunks an array whose length is not a multiple of the size", () => {
    const result = chunk([1, 2, 3], 2);
    expect(result).toStrictEqual([[1, 2], [3]]);
  });

  it("size is by default `1`", () => {
    const result = chunk([1, 2, 3]);
    expect(result).toStrictEqual([[1], [2], [3]]);
  });
});
