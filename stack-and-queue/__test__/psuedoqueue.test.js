const { PseudoQueue } = require("../index")

describe("PsuedoQueue", () => {
    let pq = new PseudoQueue;
    it("should be able to enqueue", () => {
        pq.enqueue("a");
        expect(pq.stack1[0]).toBe("a");
    })

    it("should be able to dequeue", () => {
        pq.enqueue("a");
        pq.enqueue("b");
        let output = pq.dequeue();
        expect(output).toBe("a");
        expect(pq.stack1.top).toBe("b")
    })
})