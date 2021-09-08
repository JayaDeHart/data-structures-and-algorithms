const { BinaryTree } = require("../index");

describe("Binary Tree", () => {
  it("should throw an error when trying to traverse an empty tree", () => {
    let bt = new BinaryTree();
    expect(() => {
      bt.traverse_pre();
    }).toThrow();
  });

  it("should be able to traverse a tree depth first", () => {
    let tree = {
      value: 10,
      left: {
        value: 15,
        left: null,
        right: { value: 100, left: null, right: null },
      },
      right: { value: 1, left: null, right: null },
    };
    let bt = new BinaryTree(tree);
    let output = bt.traverse_pre();
    expect(output).toEqual([10, 15, 100, 1]);
  });

  it("should be able to find the max", () => {
    let tree = {
      value: 10,
      left: {
        value: 15,
        left: null,
        right: { value: 100, left: null, right: null },
      },
      right: { value: 1, left: null, right: null },
    };
    let bt = new BinaryTree(tree);
    let max = bt.findMax();
    expect(max).toBe(100);
  });

  it("should be able to traverse a tree breadth first", () => {
    let tree = {
      value: 2,
      left: {
        value: 7,
        left: { value: 2, left: null, right: null },
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

    let bt = new BinaryTree(tree);
    let output = bt.traverse_breadth();
    expect(output).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
});
