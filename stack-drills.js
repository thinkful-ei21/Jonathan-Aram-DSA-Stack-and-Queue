'use strict';

const Stack, peek = require('./stack');

const main = () => {
  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('Mcoy');
  starTrek.push('Scotty');

  console.log(peek(starTrek));

};



main();
