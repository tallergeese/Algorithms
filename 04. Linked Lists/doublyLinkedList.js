
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
};



LinkedList.prototype.insert = function(index, value) {
  if (index > this.size || index < 0){
    console.log('error, index not in list');
    return null;
  }
  if (index === null || index === undefined){
    index = this.size;
  }
  var currentNode = this.head;
  if (index === 0){
    this.head = new DoublyLinkedListNode(value, this.head);
    if (++this.size === 1){
      this.tail = this.head;
    }
    return this.head;
  }else{
    for (var i = 0; i < index - 1; i++){
      currentNode = currentNode.next;
    }
    currentNode.next = new DoublyLinkedListNode(value, currentNode.next, currentNode);
    if (index === this.size++){
      this.tail=currentNode.next;
      this.tail.next = null;
    }
  }
  return currentNode.next;};

LinkedList.prototype.insertAfter = function(node, value) {
  // ...
};

LinkedList.prototype.insertBefore = function(node, value) {
  // ...
};

LinkedList.prototype.remove = function(index) {
  var currentNode = this.head;
  if (index === null || index === undefined){
    index = this.size-1;
  }
  if (index === 0){
    this.head = this.head.next;
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
  }
  this.size--;
};

LinkedList.prototype.get = function (index) {
  // ...
};

LinkedList.prototype.set = function(index, value) {
  // ...
};

LinkedList.prototype.find = function(value) {
  // ...
};

LinkedList.prototype.contains = function(value) {
  // ...
};
