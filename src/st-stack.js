const { resetHistory } = require('sinon');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {
  constructor() {
    this.stack = [];
 }
   
  push(element) {
    this.stack.push(element);
    this.topElement = element;
    console.log(this.topElement)
  }

  pop() {
   
    this.topElement = this.stack.pop();
   return  this.topElement
   
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}


/* npm run test -- test/st-stack.test.js */