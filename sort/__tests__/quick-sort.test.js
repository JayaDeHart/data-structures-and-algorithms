const { expect } = require("@jest/globals");
const { quickSort } = require("../index");

describe("Quick Sort", () => {
  it("Should return an empty array if given an empty array", () => {
    let arr = quickSort([]);
    expect(arr.length).toBe(0);
  });

  it("Should sort an unsorted array", () => {
    let array = [8, 4, 23, 42, 16, 15];
    let arr = quickSort(array, 0, array.length - 1);
    expect(JSON.stringify(arr)).toEqual(JSON.stringify([4, 8, 15, 16, 23, 42]));
  });

  it("Should sort an unsorted array with many duplicates", () => {
    let array = [5, 12, 7, 5, 5, 7];
    let arr = quickSort(array, 0, array.length - 1);
    expect(JSON.stringify(arr)).toEqual(JSON.stringify([5, 5, 5, 7, 7, 12]));
  });

  it("Should not modify an already sorted array", () => {
    let array = [4, 8, 15, 16, 23, 42];
    let arr = quickSort(array, 0, array.length - 1);
    expect(JSON.stringify(arr)).toEqual(JSON.stringify([4, 8, 15, 16, 23, 42]));
  });
});
