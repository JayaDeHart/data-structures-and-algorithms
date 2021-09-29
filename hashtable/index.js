const { BinaryTree } = require("../trees/index");

class HashTable {
  constructor() {
    this.holder = new Array(127);
  }

  _hash(key) {
    let hash = 0;
    for (let x = 0; x < key.length; x++) {
      hash += key.charCodeAt(x);
    }
    return hash % this.holder.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.holder[index]) {
      console.log("repeating");
      for (let x = 0; x < this.holder[index].length; x++) {
        if (this.holder[index][x][0] === key) {
          this.holder[index][x][1] = value;
          return;
        }
      }
      this.holder[index].push([key, value]);
    } else {
      this.holder[index] = [];
      this.holder[index].push([key, value]);
    }
  }

  get(key) {
    const index = this._hash(key);
    if (this.holder[index]) {
      for (let x = 0; x < this.holder.length; x++) {
        if (this.holder[index][x][0] === key) {
          return this.holder[index][x][1];
        }
      }
    }
    return null;
  }
}

function findDuplicates(str) {
  let array = str.split(" ");
  let HT = new HashTable();
  let ans = "No duplicates";
  array.forEach((item) => {
    if (HT.get(item) != null) {
      ans = item;
    } else {
      HT.set(item, item);
    }
  });

  return ans;
}

function findBTDuplicates(tree1, tree2) {
  let t1 = new BinaryTree(tree1);
  let t2 = new BinaryTree(tree2);
  let HT = new Map();
  let op1 = t1.traverse_pre();
  let op2 = t2.traverse_pre();
  let oparr = [];
  op1.forEach((item) => {
    HT.set(item, item);
  });
  op2.forEach((item) => {
    if (HT.get(item) != null) {
      oparr.push(item);
    }
  });
  return oparr;
}

module.exports = {
  HashTable,
  findDuplicates,
  findBTDuplicates,
};
