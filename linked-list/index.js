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
        if (this.head == null) {
            this.head = node;
            return;
        }
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

function zipLists(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    let output = new LinkedList();
    while (current1 && current2) {
        output.append(current1.element)
        output.append(current2.element)
        current1 = current1.next
        current2 = current2.next
    }
    return output

}


let list1 = new LinkedList();
let list2 = new LinkedList();
list1.add("1")
list1.add("1")
list2.add("2")
list2.add("2")
const zippedList = zipLists(list1, list2);
let arr = zippedList.printList();
console.log(arr);

module.exports =
{
    LinkedList,
    zipLists
}