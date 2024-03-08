//Ts day 7
const n7 = "---------------------------------------------------------------";
//TODO Practice Time
//? Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
function isPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("abcba"));

console.log(n7);
//! Homework
//? 1: Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
function calculateAverage(arr: number[]): number {
  let sum:number = 0;
  arr.forEach((e) => {
    sum += e;
  });
  return sum / arr.length;
}
console.log(calculateAverage([1, 2, 3, 4]));

console.log(n7);
//? 2: Write a function called findMaxValue that takes an array of a parameter and returns the maximum value in the array.

function findMaxValue(arr: number[]): string {
  let max:number = arr[0];;
  for (let i = 0; i < arr.length; i++) {
    max < arr[i] ? (max = arr[i]) : null;
  }
  return `max value = ${max}`;
}

console.log(findMaxValue([125, 200, 3, 40]));
