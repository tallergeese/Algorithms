
// [ ] Implement LinkedList class
// [ ] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
// [ ] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [ ] .get() function to return data at position indicated
// [ ] .set() function to change existing data at position indicated
// [ ] .find() function to return first node containing the value indicated
// [ ] .contains() function to return true/false whether the value exists
//
// [ ] Write a function to return the average of all even values in a Linked List that contains integer
//      data only.
//
var LinkedListNode = function(data, next) {
  this.data = data;
  this.next = next;
};

var LinkedList = function() {
  this.head = new LinkedListNode(null, null);
  this.tail = this.head;
  this.size = 0;
};



LinkedList.prototype.insert = function(index, value) {
  if (index > this.size){
    console.log('error, index not in list');
    return;
  }
  if (index === null || index === undefined){
    index = this.size+1;
  }
  var currentNode = this.head;
  if (index === 0){
    this.head = new LinkedListNode(value, this.head);
    if (++this.size === 1){
      this.tail = this.head;
    }
    return this.head;
  }else{
      for (var i = 0; i < index - 1; i++){
          currentNode = currentNode.next;
      }
      currentNode.next = new LinkedListNode(value, currentNode.next);
      if (index === ++this.size){
          this.tail=currentNode.next;
          this.tail.next = null;
      }
  }
  return currentNode.next;
};

LinkedList.prototype.remove = function(index) {
  var currentNode = this.head;
  for (var i = 0; i < index-1; i++){

  }

};

LinkedList.prototype.get = function (index) {
  var node = this.head;
  while(index > 0){
    node = node.next;
  }
  return node.data;
};

LinkedList.prototype.set = function(index, value) {
  // ...
};

LinkedList.prototype.find = function(value) {
  var node = this.head;
  var index = this.length;
  while (node !== null && index > 0){
    if (node.data === value){
      return node;
    }
    node = node.next;
    index--;
  }
};

LinkedList.prototype.contains = function(value) {
  // ...
};

var myList = new LinkedList();
myList.insert(0,0);
myList.insert(0,1);
myList.insert(0,2);
myList.insert(0,3);
myList.insert(2,22);
myList.insert(2,33);
myList.insert(6,444);
console.log(myList);
