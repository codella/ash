import { difference } from "./difference";

describe("difference", () => {
  it("subtracts an empty array", () => {
    const arr = [1, 2, 3, 1, 2, 3];
    const result = difference(arr, []);
    expect(result).toStrictEqual(arr);
  });

  it("subtracts an array with one element", () => {
    const result = difference([1, 2, 3, 1, 2, 3], [1]);
    expect(result).toStrictEqual([2, 3, 2, 3]);
  });

  it("subtracts an array with two element", () => {
    const result = difference([1, 2, 3, 1, 2, 3], [1, 3]);
    expect(result).toStrictEqual([2, 2]);
  });
});
