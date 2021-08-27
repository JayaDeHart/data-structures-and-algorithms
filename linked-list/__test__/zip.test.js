const { zipLists, LinkedList } = require("../index")

describe("ZipLists", () => {
    it("should be able to zip two lists", () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        list1.add("1")
        list1.add("1")
        list2.add("2")
        list2.add("2")
        const zippedList = zipLists(list1, list2);
        let arr = zippedList.printList();
        expect(arr).toStrictEqual(["1", "2", "1", "2"])
    })
})