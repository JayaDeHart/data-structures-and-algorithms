const { LinkedList } = require("../index");

describe("kthFromEnd", () => {
    it("should throw an error if k is greater than list length", () => {
        let list = new LinkedList();
        list.add("test");
        expect(() => { list.kthFromEnd(2) }).toThrow("cannot go back that many from the tail");
    })

    it("should return the correct element when k and length are the same", () => {
        let list = new LinkedList();
        list.add("test");
        list.add("test2");
        const result = list.kthFromEnd(1);
        expect(result).toEqual("test2");
    })

    it("should throw an error if k is not a positive integer", () => {
        let list = new LinkedList();
        list.add("test");
        expect(() => { list.kthFromEnd(-1) }).toThrow("cannot accept a negative value")
    });

    it("should return the correct element when the list is one element long", () => {
        let list = new LinkedList();
        list.add("test");
        const result = list.kthFromEnd(0);
        expect(result).toEqual("test");
    })

    it("should return the correct element when the list is multiple elements long", () => {
        let list = new LinkedList();
        list.add("test");
        list.add("test2");
        list.add("test3")
        const result = list.kthFromEnd(1);
        expect(result).toEqual("test2");
    })
})