
// Implement
//
//  [ ] BinarySearchTree class (BST)
//  [ ] add node functionality
//  [ ] find node functionality
//  [ ] remove node functionality (extra credit)
//

var Node = function(value, left, right){
  this.data = value;
  this.left = left;
  this.right= right;
}

var BinarySearchTree = function(){
  this.root = new Node();
}

//this definitely doesn't work
BinarySearchTree.prototype.find = function (value, node){
  node = node || this.root;
  if (node.data === value){
    return node;
  }
  if (value < node.data){
    node = node.left;
  }
  else{
    node = node.right;
  }
    this.find(value, node);
}

BinarySearchTree.prototype.add = function(value, node, direction){
  if (!this.root.data){
    this.root.data = value;
    return true;
  }

  node = node || this.root;

  if (!node[direction] && node[direction] !== 0){
    node[direction] = new Node(value);
    return true;
  }

  if (value < node.data){
    direction = left;
  }
  else if (value > node.data){
    direction = right;
  }
  else {
    return false;
  }
  this.add(value, node, direction);
}
