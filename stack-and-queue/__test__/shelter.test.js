const { expect } = require("@jest/globals");
const { AnimalShelter } = require("../index");

describe("Animal Shelter", () => {
  let shelter = new AnimalShelter();
  it("Should handle list errors", () => {
    expect(() => {
      shelter.dequeue("dog");
    }).toThrow();
    shelter.enqueue("dog");
    expect(() => {
      shelter.dequeue("hyeena");
    }).toThrow();
    expect(() => {
      shelter.dequeue("cat").toThrow();
    });
  });

  it("Should be able to enqueue", () => {
    shelter.enqueue("dog");
    expect(shelter.front).toBe("dog");
  });

  it("Should be able to dequeue at the 0th index", () => {
    let shelter2 = new AnimalShelter();
    shelter2.enqueue("cat");
    let output = shelter2.dequeue("cat");
    expect(output).toBe("cat");
    expect(shelter2.length).toBe(0);
  });

  it("Should be able to dequeue at >0 indexes", () => {
    let shelter2 = new AnimalShelter();
    shelter2.enqueue("cat");
    shelter2.enqueue("dog");
    let output = shelter2.dequeue("dog");
    expect(output).toBe("dog");
    expect(shelter2.length).toBe(1);
  });
});
