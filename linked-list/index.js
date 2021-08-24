class Node {

    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    add(element) {

        let node = new Node(element);


        let current;


        if (this.head == null)
            this.head = node;
        else {
            current = this.head;


            while (current.next) {
                current = current.next;
            }


            current.next = node;
        }
        this.size++;
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
        while (current.next) {
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

}




module.exports = LinkedList