const { HashTable } = require("../index");

describe("Hash Table", () => {
  it("should be able to set", () => {
    let ht = new HashTable();
    ht.set("name", "jaya");
    let output = ht.get("name");
    expect(output).toBe("jaya");
  });

  it("should be able to get", () => {
    let ht = new HashTable();
    ht.set("name", "jaya");
    let output = ht.get("name");
    expect(output).toBe("jaya");
  });

  it("should be able to hash", () => {
    let ht = new HashTable();
    ht.set("name", "jaya");
    let output = ht.get("name");
    expect(output).toBe("jaya");
  });
});
