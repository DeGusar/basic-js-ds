
const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.treeBottom = null;
  }

  root() {
    return this.treeBottom;
  }

  add(data) {
    this.treeBottom = addNode(this.treeBottom, data);

    function addNode(currentNode, data) {
      if (!currentNode) {
        return new Node(data);
      }
      if (currentNode.data === data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode.left = addNode(currentNode.left, data);
      } else {
        currentNode.right = addNode(currentNode.right, data);
      }
      return currentNode;
    }
   
  }

  has(data) {
    return isHas(this.treeBottom, data);
    
    function isHas(currentNode, data) {
      
      if (!currentNode) {
        return false;
      }
      if (currentNode.data === data) {
        return true;
      }
      if (data < currentNode.data) {
        return isHas(currentNode.left, data);
      } else {
        return isHas(currentNode.right, data);
      }
        
        
    }
   
  }

  find(data) {
    return search(this.treeBottom, data);
    function search(currentNode, data) {
      if (currentNode === null) {
        return null;
      } else if (data < currentNode.data) {
        return search(currentNode.left, data);
      } else if (data > currentNode.data) {
        return search(currentNode.right, data);
      } else {
        return currentNode;
      }
    }
  }

  remove(data) {
    this.treeBottom = removeNode(this.treeBottom, data);
    function removeNode(currentNode, data) {
      if (!currentNode) {
        return null;
      }
      if (data < currentNode.data) {
        currentNode.left = removeNode(currentNode.left, data);
        return currentNode;
      } else if (data > currentNode.data) {
        currentNode.right = removeNode(currentNode.right, data);
        return currentNode;
      } else {
        if (!currentNode.left && !currentNode.right) {
          return null;
        }
        if (!currentNode.left) {
          currentNode = currentNode.right;
          return currentNode;
        }
        if (!currentNode.right) {
          currentNode = currentNode.left;
          return currentNode;
        }
        let minFromBigger = currentNode.right;
        while (minFromBigger.left) {
          minFromBigger = minFromBigger.left;
        }
        currentNode.data = minFromBigger.data;
        currentNode.right = removeNode(currentNode.right, minFromBigger.data);
        return currentNode;

      }

    }
  }

  min() {
    if (!this.treeBottom) {
      return;
    }
    let currentNode = this.treeBottom;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data
  }

  max() {
    if (!this.treeBottom) {
      return;
    }
    let currentNode = this.treeBottom;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data
  }

}

/* npm run test -- test/binary-search-tree.test.js */