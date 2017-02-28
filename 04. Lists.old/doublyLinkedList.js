
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
  this.tail = head;
  this.size = 0;
};



LinkedList.prototype.insert = function(index, value) {
  // ...
};

LinkedList.prototype.insertAfter = function(node, value) {
  // ...
};

LinkedList.prototype.insertBefore = function(node, value) {
  // ...
};

LinkedList.prototype.remove = function(index) {
  // ...
};

LinkedList.prototype.get = function (index) {
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

LinkedList.prototype.set = function(index, value) {
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

LinkedList.prototype.find = function(value) {
  var node = this.head;
  var index = this.size;
  while (node.data !== value && index > 0){
    if (node.data === value){
      return node;
    }
    node = node.next;
  }
  return false;
};

LinkedList.prototype.contains = function(value) {
    var currentNode = this.head;
    for (var i = 0; i < this.size ; i++){
        if (currentNode.data === value){
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;};
