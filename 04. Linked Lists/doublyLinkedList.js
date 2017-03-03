// Ignore this function
//
if(!Array.prototype.equals) {

  // attach the .equals method to Array's prototype to call it on any array
  //
  Array.prototype.equals = function (array) {

    // if the other array is a falsy value, return
    //
    if (!array) {
      return false;
    }

    // compare lengths - can save a lot of time
    //
    if (this.length != array.length) {
      return false;
    }

    for (var i = 0, l = this.length; i < l; i++) {

      // Check if we have nested arrays
      //
      if (this[i] instanceof Array && array[i] instanceof Array) {

        // recurse into the nested arrays
        //
        if (!this[i].equals(array[i])) {
          return false;
        }
      }
      else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        //
        return false;
      }
    }
    return true;
  };

  // Hide method from for-in loops
  //
  Object.defineProperty(Array.prototype, "equals", {enumerable: false});
}
//
// Ignore that function

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

function toArray(fromWhichNode) {
  var current = fromWhichNode;
  var result = [];

  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }

  return result;
}

var list = new DoublyLinkedList();
var x = null;

console.log("Inserts");
list.insert(null, 0);
console.log("  List should be [0]: " + (toArray(list.head).equals([0])));
list.insert(null, 1);
list.insert(null, 2);
list.insert(null, 3);
console.log("  After inserting 3 more at tail, list should be [0, 1, 2, 3]: " + (toArray(list.head).equals([0, 1, 2, 3])));

list.insert(0, 10);
console.log("  After inserting at head, list should be [10, 0, 1, 2, 3]: " + (toArray(list.head).equals([10, 0, 1, 2, 3])));

list.insert(2, 20);
console.log("  insert(2, 20) should be [10, 0, 20, 1, 2, 3]: " + (toArray(list.head).equals([10, 0, 20, 1, 2, 3])));

list.insert(5, 50);
console.log("  insert(5, 50) [the tail] should be [10, 0, 20, 1, 2, 50, 3]: " + (toArray(list.head).equals([10, 0, 20, 1, 2, 50, 3])));

console.log("Search");
x = list.find(50);
console.log("  find(50) should return { data: 50, next: { data: 3, ... }}: " + (x.data === 50 && x.next.data === 3));
x = list.find(3);
console.log("  find(3) should return { data: 3, ... }: " + (x.data === 3 && x.next === null));
x = list.find(10);
console.log("  find(10) should return { data: 10, ...}: " + (x.data === 10));
x = list.find(100);
console.log("  find(100) should return null: " + (x === null));
console.log("  contains(10) should be true: " + (list.contains(10) !==null));
console.log("  contains(50) should be true: " + (list.contains(50) !== null));
console.log("  contains(3) should be true: " + (list.contains(3) !== null));
console.log("  contains(100) should be false: " + (list.contains(100) === false));

console.log("Get");
console.log("  get(0) should return 10: " + (list.get(0) === 10));
console.log("  get(3) should return 1: " + (list.get(3) === 1));
console.log("  get(6) should return 3: " + (list.get(6) === 3));
console.log("  get(10) should return null: " + (list.get(10) === null));

console.log("Set");
list.set(0, 100);
list.set(3, 103);
list.set(6, 106);
console.log("  get(0) should return 100: " + (list.get(0) === 100));
console.log("  get(3) should return 103: " + (list.get(3) === 103));
console.log("  get(6) should return 106: " + (list.get(6) === 106));

console.log("Remove");
list.remove(6);
console.log("  remove(6) should yield [100, 0, 20, 103, 2, 5]: " + (toArray(list.head).equals([100, 0, 20, 103, 2, 50])));
list.remove(3);
console.log("  remove(3) should yield [100, 0, 20, 2, 50]: " + (toArray(list.head).equals([100, 0, 20, 2, 50])));
list.remove(0);
console.log("  remove(0) should yield [0, 20, 2, 50]: " + (toArray(list.head).equals([0, 20, 2, 50])));
list.remove(1);
console.log("  remove(1) should yield [0, 2, 50]: " + (toArray(list.head).equals([0, 2, 50])));

console.log("Housekeeping");
console.log("  head should be { 0 }: " + (list.head.data === 0));
console.log("  tail should be { 50 }: " + (list.tail.data === 50));