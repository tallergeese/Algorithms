
/*

 Your objective is to implement a queue without using any built-in features.

 [ ] Complete the implementation of a Queue class
 [x] .storage property to hold the items on the queue
 [ ] .enqueue() function to queue up a value
 [ ] .dequeue() function to dequeue a value
 [ ] .length property to return the current length

 NOTE: Do not use any built-in features
 NOTE: Do not focus on edge cases or error conditions

 */

var Queue = function() {
  this.storage = [];
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  this.length--;
  return this.storage.splice(0, 1);
};


