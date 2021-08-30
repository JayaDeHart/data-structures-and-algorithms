
const { beforeAll, expect } = require("@jest/globals")
const { Stack } = require("../index")

describe("Stack", () => {
    let stack = new Stack;
    beforeAll(() => {
        stack.push("a");
    })

    it("Should be able to push", () => {
        expect(stack.top).toBe("a");
    })

    it("Should be able to pop off the stack", () => {
        stack.push("b")
        let output = stack.pop();
        expect(output).toBe("b");
        expect(stack.length).toBe(1)
    })

    it("Should be able to peek", () => {
        expect(stack.peek()).toBe("a");
    })

    it("Should be able to empty a stack", () => {
        stack.pop();
        expect(stack.length).toBe(0)
        expect(stack.top).toBe(null)
    })


})