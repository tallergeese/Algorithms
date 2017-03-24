
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

BinarySearchTree.prototype.find = function (value, node){
  node = node || this.root;
  if (node.data === value){
    console.log(node);
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

BinarySearchTree.prototype.add = function(value, node){
  if (!this.root.data){
    this.root.data = value;
    return true;
  }

  node = node || this.root;

  if (value < node.data){
    direction = 'left';
  }
  else if (value > node.data){
    direction = 'right';
  }
  else {
    return false;
  }

  if (node[direction] === undefined){
    node[direction] = new Node(value);
    return true;
  }
  node = node[direction]
  this.add(value, node);
}

var tree = new BinarySearchTree();

tree.add(30);
tree.add(12);
tree.add(64);
tree.add(34);
tree.add(98);
tree.add(44);
tree.add(23);
tree.add(53);

console.log(tree);
 
