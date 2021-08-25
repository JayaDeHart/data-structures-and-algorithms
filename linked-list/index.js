class Node {

    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }


    add(element) {
        //instantiate new
        let node = new Node(element);
        //case empty
        if (this.head == null) {
            this.head = node;
            return;
        }
        //case many
        let current = this.head;
        node.next = current;
        this.head = node;
        return;


    }


    append(element) {
        let node = new Node(element)
        //already pointing to null
        let current = this.head;


        while (current.next) {
            current = current.next
        }
        //current should be pointing at the last element
        current.next = node;

    }

    insertBefore(value, newValue) {

        //I dont think this handles the case that the value to insert before == header TODO

        let newNode = new Node(newValue)
        let current = this.head;
        let prev;
        while (current) {
            if (current.element === value) {
                // do the switching logic
                prev.next = newNode;
                newNode.next = current
                return;
            } else {
                // do the incrementing logic
                prev = current;
                current = current.next;

            }

        }
    }

    insertAfter(value, newValue) {
        let newNode = new Node(newValue)
        let current = this.head;
    }

    hasElement(element) {
        let current = this.head;
        while (current != null) {

            if (current.element === element)
                return true;
            current = current.next;
        }


        return false;
    }



    printList() {
        let curr = this.head;
        let items = [];
        while (curr) {
            items.push(curr.element);
            curr = curr.next
        }
        return items;
    }

    toString() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += ` { ${curr.element} } ->`
            curr = curr.next;
        }
        str += " NULL"
        return str;
    }

    kthFromEnd(k) {
        //case k <0
        if (k < 0) {
            throw Error("cannot accept a negative value")
        }
        //in case the list is completely empty
        if (this.head == null) {
            throw Error("cannot do anything to an empty list")
        }
        //case k>0
        let length = 0;
        let current = this.head;
        while (current) {
            length++
            current = current.next
        }
        if (k + 1 > length) {
            throw Error("cannot go back that many from the tail")
        }
        let fromStart = length - k;
        current = this.head;
        for (let x = 1; x < fromStart; x++) {
            current = current.next;
        }
        return current.element;
    }


}

let testList = new LinkedList();
testList.add("last")
testList.add("second")
testList.add("first")
testList.insertBefore("last", "penultimate");
console.log(testList.toString())


module.exports = LinkedList