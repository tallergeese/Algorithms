
// Implement
//
//  [ ] BinaryTree class
//  [ ] add node functionality
//  [ ] find node functionality
//  [ ] remove node functionality (extra credit)
//


var Node = function(value, left, right){
  this.data = value;
  this.left = left;
  this.right= right;
}

var BinaryTree = function(){
  this.root = new Node();
}

BinaryTree.prototype.find = function (value, node){
  node = node || this.root;
  if (node.data === value){
    return node;
  }
  var found = find(value, node.left);
  if (!found){
    found = find(value, node.right);
  }
  return found;
}

BinaryTree.prototype.add = function(value, parent){
  if (!parent){
    var node = new Node(value, this.root);
    this.root = node;
  }else{
  var node = new Node(value, parent.left);
  parent.left = node;
  }
return true;
}
