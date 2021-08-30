
const { Queue } = require("../index")

describe("Queue", () => {
    it("Should be able to enqueue", () => {
        let q = new Queue;
        q.enqueue("a");
        expect(q[0]).toBe("a");
    })

    it("Should be able to dequeue", () => {
        let q = new Queue;
        q.enqueue("a");
        q.enqueue("b");
        q.dequeue();
        expect(q[0]).toBe("b");
    })

    it("Should be able to peek", () => {
        let q = new Queue;
        q.enqueue("a");
        expect(q.peek()).toBe("a");
    })

    it("Should be able to empty a queue", () => {
        let q = new Queue;
        q.enqueue("a");
        q.dequeue();
        expect(q.length).toBe(0);
    })
})