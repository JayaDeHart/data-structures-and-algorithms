"use strict";

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
      throw new Error("cannot look at an empty queue");
    }
    return this[0];
  }

  dequeue() {
    if (this.length === 0) {
      throw new Error("cannot deque at an empty queue");
    }
    //store the value to be dequeued in this.front
    this.front = this[0];
    //move every value in the queue one step forwards
    for (let x = 0; x < this.length; x++) {
      if (this[x + 1]) {
        this[x] = this[x + 1];
      }
    }
    //remove the last index, decrement length
    this.length--;
    delete this[this.length];

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
    this.length++;
  }

  pop() {
    const output = this.top;
    this.length--;
    delete this[this.length];
    let newtop;
    if (this[this.length - 1]) {
      newtop = this[this.length - 1];
    } else {
      newtop = null;
    }

    this.top = newtop;
    return output;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    if (this.length === 0) {
      throw new Error("cannot look at an empty stack");
    }
    return this.top;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    //transfer everything over so its in the right order
    //pop off the top
    //transfer everything back
    if (this.stack1.length == 0) {
      throw new Error("You can't dequeue an empty queueue");
    }
    //transfer to stack 2 and switch orders
    let l = this.stack1.length;
    for (let x = 0; x < l; x++) {
      let y = this.stack1.pop();
      this.stack2.push(y);
    }

    //store the value we're dequeing
    let output = this.stack2.pop();

    //transfer everything back to stack 1, restoring the original order
    let l2 = this.stack2.length;
    for (let z = 0; z < l2; z++) {
      let a = this.stack2.pop();
      this.stack1.push(a);
    }
    return output;
  }
}

class AnimalShelter {
  constructor() {
    this.length = 0;
    this.front = null;
    this.validAnimals = ["dog", "cat"];
  }

  enqueue(animal) {
    if (!this.validAnimals.includes(animal)) {
      throw new Error("this shelter only accepts dogs and cats");
    }
    if (this.length === 0) {
      this.front = animal;
    }
    this[this.length] = animal;
    this.length++;
  }

  dequeue(preference) {
    if (this.length === 0) {
      throw new Error("sorry, we're all out of animals");
    }
    if (!this.validAnimals.includes(preference)) {
      throw new Error("this shelter only accepts dogs and cats");
    }
    let x = 0;
    let output = null;
    while (output !== preference && x < this.length) {
      if (this[x] === preference) {
        output = this[x];
      }
      x++;
    }
    //if it made it to the end of the while loop without setting an output, we know that there were none of the preferred animal
    if (!output) {
      throw new Error(`Sorry, we didn't have any ${preference}s`);
    }
    //now we move everything behind the removed animal forward one space
    for (let z = x; z < this.length; z++) {
      if (this[x + 1]) {
        this[x] = this[x + 1];
      }
    }
    //delete the last item and decrement the length
    this.length--;
    delete this[this.length];
    //return the animal
    return output;
  }
}

function validateBrackets(string) {
  //initialize the stack
  //dissasemble the string
  let stack = new Stack();
  let array = string.split("");

  //create pseudoregexes
  let brackets = [")", "}", "]", "(", "{", "["];
  let openers = ["(", "{", "["];
  let pairs = ["()", "{}", "[]"];

  //feed the string into stack
  for (let x = 0; x < array.length; x++) {
    if (brackets.includes(array[x])) {
      //if its an opener, push it on
      if (openers.includes(array[x])) {
        stack.push(array[x]);
      }
      //if its a closer, we have to check if it matches
      if (!openers.includes(array[x])) {
        //assemble the pair
        let opener = stack.peek();
        let pair = opener + array[x];
        if (pairs.includes(pair)) {
          //if it matches, we pop() to take the matching pair out
          stack.pop();
        }
        if (!pairs.includes(pair)) {
          //if it doesn't match, then the whole string is a bust and we return false
          return false;
        }
      }
    }
  }
  //if we make it all the way through, that means the whole string matches and we can return true
  return true;
}

module.exports = {
  Stack,
  Queue,
  PseudoQueue,
  AnimalShelter,
  validateBrackets,
};
