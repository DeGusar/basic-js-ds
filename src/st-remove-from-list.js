const { useFakeServer } = require('sinon');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

/*  convertArrayToList([3, 1, 2, 3, 4, 5]); */




module.exports = function removeKFromList(l, k) {
    
    let current=l ;
    if (l.value === k) {
        l = l.next;
    }
    
    while (current.next !== null) {
            if (current.next.value === k) {
                current.next = current.next.next;
            } 
             current = current.next;
            
                  
    }
    return l
    } 
        
    
    



/* npm run test -- test/st-remove-from-list.test.js */