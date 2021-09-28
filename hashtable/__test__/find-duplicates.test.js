const { findDuplicates } = require("../index");

describe("Find Duplicates", () => {
  it("Should be able to find duplicates", () => {
    let ans = findDuplicates(
      "Once upon a time, there was a brave princess who..."
    );
    expect(ans).toBe("a");
  });

  it("Should return a message if no duplicates", () => {
    let ans = findDuplicates("a b c d e");
    expect(ans).toBe("No duplicates");
  });
});
