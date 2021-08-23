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


    insertAt(element, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {

            let node = new Node(element);
            let curr, prev;

            curr = this.head;


            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }




    hasElement(element) {
        let count = 0;
        let current = this.head;
        while (current != null) {

            if (current.element === element)
                return true;
            count++;
            current = current.next;
        }


        return false;
    }



    printList() {
        let curr = this.head;
        let items = [];
        while (curr) {
            items.push(curr.element);

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