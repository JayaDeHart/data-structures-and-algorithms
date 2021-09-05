const { it, expect } = require("@jest/globals");
const { BinarySearchTree } = require("../index");

describe("Binary Search Tree", () => {
  let bst = new BinarySearchTree();
  it("Should be able to add to an empty tree", () => {
    bst.add(50);
    expect(bst.root.value).toEqual(50);
  });

  it("Should be able to add subsequent items in the correct place", () => {
    bst.add(40);
    bst.add(20);
    bst.add(60);
    expect(bst.root.left.value).toEqual(40);
    expect(bst.root.right.value).toEqual(60);
  });

  it("Should return true when searching for an item that is in the tree", () => {
    expect(bst.contains(60)).toEqual(true);
  });

  it("Should return false when searching for an item not in the tree", () => {
    expect(bst.contains(9)).toEqual(false);
  });
});
