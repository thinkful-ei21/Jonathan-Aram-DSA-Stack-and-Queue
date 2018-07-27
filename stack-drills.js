'use strict';

const Stack = require('./stack');
const { display, peek, remove } = require('./helper-functions');

const isPalindrome = string => {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  const stack = new Stack();
  let palindrone = '';

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  while (stack.top !== null) {
    palindrone += stack.pop();
  }

  if (palindrone === string) {
    return true;
  }
  return false;
};

const matchingParens = exp => {
  const stack = new Stack();
  let counter = 0;

  if (stack.top === null) {
    return '';
  }

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(' || exp[i] === ')') {
      stack.push(exp[i]);
    }
  }
  while (stack.top !== null) {
    if (stack.pop() === '(') {
      counter++;
    }
    if (stack.pop() === ')') {
      counter--;
    }
  }
  if (counter === 0) {
    return true;
  }
  return false;
};

const sortStack = stack => {
  if (stack.top === null) {
    return '';
  }
  let newStack = new Stack();
  while (stack.top !== null) {
    let temp = stack.pop();
    while (newStack !== null && peek(newStack) > temp) {
      stack.push(newStack.pop());
    }
    newStack.push(temp);
  }
  while (newStack.top !== null) {
    stack.push(newStack.pop());
  }
  return stack;
};

const main = () => {
  const starTrek = new Stack();

  starTrek.push(3);
  starTrek.push(2);
  starTrek.push(5);
  starTrek.push(45);
  // console.log(peek(starTrek));
  // console.log(display(starTrek));
  // remove(starTrek, 'Mcoy');
  // console.log(display(starTrek));
  // console.log(isPalindrome('dad'));
  // console.log(matchingParens('(4 + 5)'));
  console.log(display(sortStack(starTrek)));
};

main();
