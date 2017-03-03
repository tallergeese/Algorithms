
/*

  Your objective is to implement a stack without using any built-in features.

    [ ] Complete the implementation of a Stack class
    [x] .storage property to hold the items on the stack
    [ ] .push() function to push a value onto the stack
    [ ] .pop() function to pop a value off the stack
    [ ] .length property to return the current length

  NOTE: Do not use any built-in features
  NOTE: Do not focus on edge cases or error conditions

*/

var Stack = function() {
  this.storage = [];
  this.size = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.size] = value;
  this.size++;
};

Stack.prototype.pop = function() {
  this.size--;
  return this.storage.splice(this.size - 1, 1);
};

