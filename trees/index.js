class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  traverse_pre() {
    let output = [];
    function _watch(node) {
      output.push(node.value);
      if (node.left) {
        _watch(node.left);
      }
      if (node.right) {
        _watch(node.right);
      }
    }
    _watch(this.root);
    return output;
  }

  traverse_order() {
    if (!this.root) {
      return new Error("Cannot traverse an empty tree");
    }
    let output = [];
    function _watch(node) {
      if (node.left) {
        _watch(node.left);
        output.push(node.value);
      }
      if (node.right) {
        _watch(node.right);
      }
    }
    _watch(this.root);
    return output;
  }

  traverse_post() {
    if (!this.root) {
      return new Error("Cannot traverse an empty tree");
    }
    let output = [];
    function _watch(node) {
      if (node.left) {
        _watch(node.left);
        output.push(node.value);
      }
      if (node.right) {
        _watch(node.right);
      }
    }
    _watch(this.root);
    return output;
  }

  findMax() {
    if (!this.root) {
      return new Error("Cannot find the max value of an empty tree");
    }
    let max = 0;
    function _search(node) {
      if (node.value > max) {
        max = node.value;
        console.log(max);
      }
      if (node.left) {
        _search(node.left);
      }
      if (node.right) {
        _search(node.right);
      }
    }
    _search(this.root);
    return max;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
    super(root);
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    }
    function _findSpot(node) {
      if (value < node.value && !node.left) {
        node.left = new Node(value);
        return;
      }
      if (value > node.value && !node.right) {
        node.right = new Node(value);
        return;
      }
      if (value < node.value) {
        _findSpot(node.left);
      }
      if (value > node.value) {
        _findSpot(node.right);
      }
    }
    _findSpot(this.root);
  }

  contains(value) {
    if (this.root === null) {
      return new Error("Cannot search an empty tree");
    }
    let bool;
    function _search(node) {
      if (!node) {
        bool = false;
        return;
      }
      if (value == node.value) {
        bool = true;
        return;
      }
      if (value < node.value) {
        _search(node.left);
      }
      if (value > node.value) {
        _search(node.right);
      }
    }
    _search(this.root);
    return bool;
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};
