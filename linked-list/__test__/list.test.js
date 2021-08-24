const { it, expect } = require("@jest/globals")
const LinkedList = require("../index")

describe("linked list", () => {
    it("should instantiate an empty list", () => {
        let list = new LinkedList();
        expect(list.head).toBe(null);
    })

    it("should be able to insert into the list", () => {
        let list = new LinkedList();
        list.add("test");
        expect(list.hasElement("test")).toBe(true)
    })

    it("should have a working head property", () => {
        let list = new LinkedList();
        list.add("test");
        expect(list.head.element).toBe("test")
    })

    it("should return true when finding a value that exists within it", () => {
        let list = new LinkedList();
        list.add("test");
        expect(list.hasElement("test")).toBe(true)
    })

    it("should return false when finding a value that does not exist within it", () => {
        let list = new LinkedList();
        list.add("test");
        expect(list.hasElement("wrongEl")).toBe(false)
    })

    it("should return a collection of all the values that exist within it", () => {
        let list = new LinkedList();
        list.add("test");
        expect(typeof list.printList()).toBe("object");
    })

    it("should be able to append an element", () => {
        let testList = new LinkedList();
        testList.add("second")
        testList.add("first")
        testList.append("last")
        let arr = testList.printList();
        expect(arr[2]).toBe("last")
    })

    it("should be able to insert before", () => {
        let testList = new LinkedList();
        testList.add("first")
        testList.add("second")
        testList.append("last")
        testList.insertBefore("second", "penultimate");
        let arr = testList.printList();
        expect(arr[1]).toBe("penultimate");
    })
})