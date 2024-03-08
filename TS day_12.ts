//todo Homework Time

//* Practice questions for map:

//? 1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
const nameArray: string[] = ["Ali", "Ahmad", "Rehan", "Furqan", "Rehman"];
const NewNameArray: string[] = nameArray.map((nam: string) =>
  nam.toUpperCase()
);
console.log(NewNameArray);

//? 2: Given an array of numbers, create a new array that contains the square of each number.
const numberArray: number[] = [2, 4, 7, 8, 12, 23, 9];
const nweNumberArray: number[] = numberArray.map((num: number) => num * num);
console.log(nweNumberArray);

//* Practice questions for filter:

//? 1: Given an array of strings, create a new array that contains only the strings with a length greater than 4.
const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
const newNames: string[] = names.filter((nam: string) => nam.length > 4);
console.log(newNames);
//? 2: Given array of strings, filter out the names that start with the letter "A".
const namesA: string[] = names.filter((nam: string) => nam[0] == "A");
console.log(namesA);