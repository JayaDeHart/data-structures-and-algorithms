const { findBTDuplicates } = require("../index");

describe("Find Binary Tree Duplicates", () => {
  it("Should be able to find all the common items across two binary trees", () => {
    let tree1 = {
      value: 2,
      left: {
        value: 7,
        left: { value: 99, left: null, right: null },
        right: {
          value: 6,
          left: { value: 5, left: null, right: null },
          right: { value: 11, left: null, right: null },
        },
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: { value: 4, left: null, right: null },
          right: null,
        },
      },
    };
    let tree2 = {
      value: 2,
      left: {
        value: 100,
        left: { value: 99, left: null, right: null },
        right: {
          value: 6,
          left: { value: -9, left: null, right: null },
          right: { value: 11, left: null, right: null },
        },
      },
      right: {
        value: 200,
        left: null,
        right: {
          value: 300,
          left: { value: 400, left: null, right: null },
          right: null,
        },
      },
    };
    let output = findBTDuplicates(tree1, tree2);
    expect(output).toEqual([2, 99, 6, 11]);
  });
});
