const { expect } = require("@jest/globals");
const { insertionSort } = require("../index");

describe("Insertion Sort", () => {
  it("Should return an empty array if given an empty array", () => {
    let arr = insertionSort([]);
    expect(arr.length).toBe(0);
  });

  it("Should sort an unsorted array", () => {
    let arr = insertionSort([8, 4, 23, 42, 16, 15]);
    expect(JSON.stringify(arr)).toEqual(JSON.stringify([4, 8, 15, 16, 23, 42]));
  });

  it("Should sort an unsorted array with many duplicates", () => {
    let arr = insertionSort([5, 12, 7, 5, 5, 7]);
    expect(JSON.stringify(arr)).toEqual(JSON.stringify([5, 5, 5, 7, 7, 12]));
  });

  it("Should not modify an already sorted array", () => {
    let arr = insertionSort([4, 8, 15, 16, 23, 42]);
    expect(JSON.stringify(arr)).toEqual(JSON.stringify([4, 8, 15, 16, 23, 42]));
  });
});
