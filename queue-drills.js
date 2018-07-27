'use strict';

const Queue = require('./queue');
const { displayQ, peekQ, removeQ } = require('./helper-functions');

const sqDancePairing = listOfPpl => {
  const male = new Queue();
  const female = new Queue();

  while (listOfPpl.first !== null) {
    let person = listOfPpl.dequeue();
    if (person[0] === 'M') {
      male.enqueue(person);
    }
    if (person[0] === 'F') {
      female.enqueue(person);
    }
  }

  while (male.first !== null && female.first !== null) {
    console.log(male.dequeue(), 'with', female.dequeue());
  }

  if (male.first !== null) {
    console.log('The extra men leftover are:');
    console.log(displayQ(male));
  }
  if (female.first !== null) {
    console.log('The extra women leftover are:');
    console.log(displayQ(female));
  }
};

const bankLineSimulator = bankCustomers => {
  if (bankCustomers.first === null) {
    console.log("Ain't nobody here");
  }

  while (bankCustomers.first !== null) {
    const reQueue = Math.floor(Math.random() * 100);
    if (reQueue < 25) {
      let derp = bankCustomers.dequeue();
      bankCustomers.enqueue(derp);
      console.log(
        derp,
        'messed up their paperwork and had to get back in line... what a derp!'
      );
    } else {
      let goodBanker = bankCustomers.dequeue();
      console.log(goodBanker, 'did it right.');
    }
  }
};

const main = () => {
  const starTrekQ = new Queue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  // console.log(peekQ(starTrekQ));

  // console.log(displayQ(starTrekQ));
  // console.log(displayQ(removeQ(starTrekQ, 'Spock')));

  const listOfPpl = new Queue();

  listOfPpl.enqueue('F Jane');
  listOfPpl.enqueue('M Frank');
  listOfPpl.enqueue('M John');
  listOfPpl.enqueue('M Sherlock');
  listOfPpl.enqueue('F Madona');
  listOfPpl.enqueue('M David');
  listOfPpl.enqueue('M Christopher');
  listOfPpl.enqueue('F Beyonce');

  // sqDancePairing(listOfPpl);

  const bankCustomers = new Queue();

  bankCustomers.enqueue('Jane');
  bankCustomers.enqueue('Frank');
  bankCustomers.enqueue('John');
  bankCustomers.enqueue('Sherlock');
  bankCustomers.enqueue('Madona');
  bankCustomers.enqueue('David');
  bankCustomers.enqueue('Christopher');
  bankCustomers.enqueue('Beyonce');

  bankLineSimulator(bankCustomers);
};

main();
