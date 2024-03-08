////! TS Day 4 -  Home Work Time 🙏
/// Ts strings
let n = "--------------------------------------------------------"

// todo 👉  Uppercase Lowercase:
// How can you declare a string variable with the value of your choice in TypeScript, and then convert it to uppercase and lowercase?
let text: string = "My name is Rehan and i dont have any cat";
let up: string = text.toUpperCase();
let low: string = text.toLowerCase();
console.log(up);
console.log(low);
console.log(n);

// todo 👉  Substring: 
// ? Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.
let longText:string = "My name is Rehan and i dont have any cat";
let shortText:string = longText.slice(0,10);
console.log(shortText);

console.log(n);
// todo 👉  String Comparison: 
// ? Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.
let str1 = "abcd";
let str2 = "hijk";
let areEqual = str1 == str2;
console.log(areEqual);

console.log(n);
// todo 👉  String Template: 
// ? Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."
let product: string = "Laptop";
let price: number = 999;
let message: string = `The product ${product} is priced at ${price} dollars.`;
console.log(message);

console.log(n);