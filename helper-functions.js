'use strict';

const Stack = require('./stack');
const Queue = require('./queue');

/////// STACK
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

/////// QUEUE

const peekQ = queue => {
  let inputQueue = new Queue();
  inputQueue = queue;
  if (inputQueue.first === null) {
    return '';
  }
  return inputQueue.first.value;
};

const displayQ = queue => {
  let inputQueue = new Queue();
  inputQueue = queue;
  if (inputQueue.first === null) {
    return '';
  }

  console.log(inputQueue.dequeue());
  displayQ(inputQueue);
  return '';
};

const removeQ = (queue, item) => {
  let importQueue = new Queue();
  let exportQueue = new Queue();
  importQueue = queue;
  if (importQueue.first === null) {
    return '';
  }
  while (importQueue.first !== null) {
    let tempItem = importQueue.dequeue();
    if (tempItem !== item) {
      exportQueue.enqueue(tempItem);
    }
  }

  return exportQueue;
};

module.exports = { display, peek, remove, displayQ, peekQ, removeQ };
