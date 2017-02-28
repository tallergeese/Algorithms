
// [ ] Implement DoublyLinkedList class
// [ ] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
//    [ ] .insertAfter() function to insert data after the node passed in
//    [ ] .insertBefore() function to insert data before the node passed in
// [ ] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [ ] .get() function to return data at position indicated
// [ ] .set() function to change existing data at position indicated
// [ ] .find() function to return first node containing the value indicated
// [ ] .contains() function to return the number of occurrences of a value in the list.  0 for none.
//
// [ ] Write a function using a doubly linked list to return the index of the nth odd number from the
//      tail of the list.
//
// Extra Credit (for the brave and true)
//
//   [ ] Implement a new Vector class using a Doubly LinkedList as a backing store
//

var DoublyLinkedListNode = function(data, next, previous) {
  this.data = data;
  this.next = next;
  this.previous = previous;
};

var DoublyLinkedList = function() {
  this.head = new DoublyLinkedListNode(null, null, null);
  this.tail = this.head;
  this.size = 0;
};



DoublyLinkedList.prototype.insert = function(index, value) {
  if (index > this.size || index < 0){
    console.log('error, index not in list');
    return null;
  }
  if (index === null || index === undefined){
    index = this.size;
  }
  var currentNode = this.head;
  if (index === 0){
    this.head = new DoublyLinkedListNode(value, this.head, null);
    this.head.next.previous = this.head;
    if (++this.size === 1){
      this.tail = this.head;
    }
    return this.head;
  }else{
    for (var i = 0; i < index - 1; i++){
      currentNode = currentNode.next;
    }
    currentNode.next = new DoublyLinkedListNode(value, currentNode.next, currentNode);
    currentNode.next.next.previous = currentNode.next;
    if (index === this.size++){
      this.tail=currentNode.next;
      this.tail.next = null;
    }
  }
  return currentNode.next;};

DoublyLinkedList.prototype.insertAfter = function(node, value) {
  // ...
};

DoublyLinkedList.prototype.insertBefore = function(node, value) {
  // ...
};

DoublyLinkedList.prototype.remove = function(index) {
  var currentNode = this.head;
  if (index === null || index === undefined){
    index = this.size-1;
  }
  if (index === 0){
    this.head = this.head.next;
    this.head.previous = null;
    this.size--;
    return;
  }
  for (var i = 0; i < index-1; i++){
    currentNode=currentNode.next;
  }
  if (index === this.size - 1){
    this.tail = currentNode;
    this.tail.next = null;
  }else{
    currentNode.next = currentNode.next.next;
    currentNode.next.previous = currentNode;
  }
  this.size--;
};

DoublyLinkedList.prototype.get = function (index) {
  if (index > this.size){
    console.log('error, index not in list');
    return;
  }
  var node = this.head;
  while(index > 0){
    node = node.next;
    index--;
  }
  return node.data;
};

DoublyLinkedList.prototype.set = function(index, value) {
  if (index > this.size){
    console.log('error, index not in list');
    return;
  }
  var node = this.head;
  while(index > 0){
    node = node.next;
    index--;
  }
  node.data=value;
  return node;
};

DoublyLinkedList.prototype.find = function(value) {
  var node = this.head;
  var index = this.size;
  while (index > 0){
    if (node.data === value){
      return node;
    }
    node = node.next;
    index--;
  }
  return node;};

DoublyLinkedList.prototype.contains = function(value) {
  var currentNode = this.head;
  for (var i = 0; i < this.size ; i++){
    if (currentNode.data === value){
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;};

function nthOddIndexFromEnd(n, list){
  var node = list.tail;
  var index = list.size-1;
  var count = 0;
  while (node){
    if (node.data%2 !== 0){
      count++;
      if (count === n){
        return index;
      }
    }
    index--;
    node = node.previous;
  }
  return null;
}

var myList = new DoublyLinkedList();
myList.insert(0,0);
myList.insert(0,1);
myList.insert(0,2);
myList.insert(0,3);
myList.insert(2,22);
myList.insert(2,33);
myList.insert(6,444);
console.log(myList);