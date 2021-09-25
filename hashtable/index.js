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

module.exports = {
  HashTable,
};
