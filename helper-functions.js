'use strict';

const Stack = require('./stack');

const peek = stack => {
  let inputStack = new Stack();
  inputStack = stack;
  if (inputStack.top === null) {
    return '';
  }
  return inputStack.top.data;
};

const display = stack => {
  let inputStack = new Stack();
  inputStack = stack;
  if (inputStack.top === null) {
    return '';
  }

  console.log(inputStack.pop());
  display(inputStack);
  return '';
};

const remove = (stack, item) => {
  let inputStack = new Stack();
  let exportStack = new Stack();
  inputStack = stack;
  if (inputStack.top === null) {
    return '';
  }
  while (inputStack.top !== null) {
    let tempItem = inputStack.pop();
    if (tempItem !== item) {
      exportStack.push(tempItem);
    }
  }
  return exportStack;
};

module.exports = { display, peek, remove };
