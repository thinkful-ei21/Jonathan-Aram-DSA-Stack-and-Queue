'use strict';

const Stack = require('./stack');
const { display, peek, remove } = require('./helper-functions');

const isPalindrome = string => {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
};

const main = () => {
  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('Mcoy');
  starTrek.push('Scotty');
  // console.log(peek(starTrek));
  // console.log(display(starTrek));
  // remove(starTrek, 'Mcoy');
  // console.log(display(starTrek));
};

main();
