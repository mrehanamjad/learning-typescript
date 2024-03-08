// TS Day 5
const n5 = "-------------------------------------------------------";

//!Question: Check Even Number
//* Write a TypeScript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
const isEven = (Number: number): boolean => {
  return Number % 2 === 0;
};
console.log(isEven(22));

console.log(n5);
//todo Homework 👉 write a TypeScript function called isDivisibleBy4And8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.
const isDivisibleBy4And8 = (num: number): boolean => {
  return num % 4 === 0 && num % 8 === 0;
};
console.log(isDivisibleBy4And8(22));

console.log(n5);
//BigInt:
let bigNumber: bigint = 9007199254740991n;
let anotherBigNumber: bigint = BigInt("9007199254740991n");
console.log(bigNumber);
console.log(anotherBigNumber);

//! Assignment
let Sum = bigNumber + anotherBigNumber;
console.log(`sum = ${Sum}`);
let Difference = bigNumber - anotherBigNumber;
console.log(`Difference = ${Difference}`);
let Product = bigNumber * anotherBigNumber;
console.log(`Product = ${Product}`);
let Division = bigNumber / anotherBigNumber;
console.log(`Division = ${Division}`);
