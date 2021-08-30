
'use strict';

class Queue {
    constructor() {
        this.length = 0;
        this.front = null;
    }

    enqueue(value) {
        this[this.length] = value;
        this.length++;

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if (this.length === 0) {
            throw new Error("cannot look at an empty queue")
        }
        return this[0];
    }

    dequeue() {
        if (this.length === 0) {
            throw new Error("cannot deque at an empty queue")
        }
        //store the value to be dequeued in this.front
        this.front = this[0];
        //move every value in the queue one step forwards
        for (let x = 0; x < this.length; x++) {
            if (this[x + 1]) {
                this[x] = this[x + 1]
            }

        }
        //remove the last index, decrement length
        this.length--
        delete this[this.length]

        //return the value that was dequeued
        return this.front;
    }
}





class Stack {
    constructor() {
        this.length = 0;
        this.top = null;
    }
    push(value) {
        this.top = value;
        this[this.length] = value;
        this.length++
    }

    pop() {
        const output = this.top;
        this.length--
        delete this[this.length]
        let newtop;
        if (this[this.length - 1]) {
            newtop = this[this.length - 1]
        } else {
            newtop = null;
        }

        this.top = newtop
        return output;
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if (this.length === 0) {
            throw new Error("cannot look at an empty queue")
        }
        return this.top;
    }
}


module.exports = {
    Stack,
    Queue
}