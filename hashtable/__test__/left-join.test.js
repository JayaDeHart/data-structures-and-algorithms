const { leftJoin } = require("../index");

describe("Left Join", () => {
  it("should be able to left join two hash maps", () => {
    let map1 = new Map([
      ["cool", "cold"],
      ["dope", "sick"],
      ["hate", "despise"],
    ]);
    let map2 = new Map([
      ["cool", "hot"],
      ["dope", "lame"],
      ["hate", "love"],
    ]);
    let output = leftJoin(map1, map2);
    expect(output).toEqual([
      ["cool", "cold", "hot"],
      ["dope", "sick", "lame"],
      ["hate", "despise", "love"],
    ]);
  });

  it("should handle null values appropriately", () => {
    let map1 = new Map([
      ["cool", "cold"],
      ["dope", "sick"],
      ["hate", "despise"],
    ]);
    let map2 = new Map([
      ["cool", "hot"],
      ["kevin durant", "loyal"],
      ["hate", "love"],
    ]);
    let output = leftJoin(map1, map2);
    expect(output).toEqual([
      ["cool", "cold", "hot"],
      ["dope", "sick", null],
      ["hate", "despise", "love"],
    ]);
  });

  it("should handle maps of different sizes", () => {
    let map1 = new Map([
      ["cool", "cold"],
      ["dope", "sick"],
      ["hate", "despise"],
      ["relationship", "confluence"],
    ]);
    let map2 = new Map([
      ["cool", "hot"],
      ["dope", "lame"],
      ["hate", "love"],
    ]);
    let output = leftJoin(map1, map2);
    expect(output).toEqual([
      ["cool", "cold", "hot"],
      ["dope", "sick", "lame"],
      ["hate", "despise", "love"],
      ["relationship", "confluence", null],
    ]);
  });
});
