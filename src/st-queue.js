const { resetHistory } = require('sinon');
const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor () {
    this.queue = [];
  }
  getUnderlyingList() {
     let queueList = null;
    for (let i = this.queue.length - 1; i >= 0; i) {
      queueList = { value: this.queue[i], rest: queueList };
     
    }
    return queueList;
  }

  enqueue(value) {
    this.topElement = this.queue.push(value);
    
  }

  dequeue() {
    this.topElement = this.queue.shift();
    return this.topElement;
  }

}


/* npm run test -- test/st-queue.test.js */