//TypeScript Unions and Intersections
//? Union types allow you to specify that a variable can hold values of multiple types. You use the (pipe) symbol to define a union type. n
//*In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties. Failure to do so will result in a type error during compilation.

const A = (val: string | number | boolean): void => {
  console.log(val);
};

A("rehan");
A(true);
A(123);

//* Practice, we'll create a function that can accept different types of arguments and perform different actions based on the type of the input. Suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string. To achieve this, we can use a union type to allow the function to accept both numbers and strings.

function U(value: string | number): string | number {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    throw new Error("Invalid input");
  }
}
console.log(U("Rehan"));
console.log(U(7));

//todo HOMEWORK TIME
//?we want to create a function that formats the value passed to it in a specific way based on its type:
//? If the input is a number, it should add a dollar sign and format it with two decimal places.
//? If the input is a boolean, it should return "Yes" for true and "No" for false.
//? If the input is a string, it should capitalize the first letter.

function formatValue(input: any): string {
  if (typeof input === "number") {
    return `$${input.toFixed(2)}`;
  } else if (typeof input === "boolean") {
    return input ? "Yes" : "No";
  } else if (typeof input === "string") {
    return input.charAt(0).toUpperCase() + input.slice(1);
  } else {
    return "Invalid input";
  }
}

console.log(formatValue(10));
console.log(formatValue(true));
console.log(formatValue("Good"));

//!Intersection types allow you to combine multiple types into a single type. You use the & (ampersand) symbol to define an intersection type.

type Person = {
  name: string;
  age: number;
};

type Imployee = {
  id: number;
  department: string;
};

type employeeDetails = Person & Imployee;

const employee: employeeDetails = {
  name: "Rehan",
  age: 18,
  id: 202284,
  department: "IT",
};

console.log(employee);

//* Practice: Create User Profile
//*You are given two TypeScript types: User and MyLocation. The User type represents basic user information, while the MyLocation type contains details about the user's location.create a function called createUserProfile that takes a User object and MyLocation object as arguments and prints the user's name and the city they are from.

type User = {
  name: string;
  age: number;
};

type MyLocation = {
  city: string;
  country: string;
};

const user:User = {name:"Rehan",age:18};
const myLocation:MyLocation = {city:"Karachi", country:"Pakistan"};


function createUserProfile(user:User,location:MyLocation){
    return {...user,...location}
}

const complaterUserDetail: User & MyLocation = createUserProfile(user,myLocation)
console.log(complaterUserDetail)

//todo Homework Question:  👉 Combine User and Account Data
//todo You are building a user management system, and you have two TypeScript types:
// User: Represents basic user information, with the following properties:
// id (number): The user's unique identifier.
// name (string): The user's name.
// email (string): The user's email address.
//? Account: Contains details about the user's account, with the following properties:
// accountId (number): The account's unique identifier.
// accountType (string): The type of the account (e.g., "Savings," "Checking," etc.). 
// balance (number): The account balance.
//* Your task is to create a function called combineUserAndAccount that takes a User object and an Account object as arguments and returns a new object representing the combined information of the user and their account.
// Ensure that the resulting object contains all the properties from both User and Account types.

type UserT = {
    name: string;
    email: string;
};

type AccountT = {
    accountId: number;
    accountType: string;
    balance: number;
}

const userObj:UserT = {
    name: "Amjad",
    email: "amjad123@mail.com"
}

const accountObj:AccountT = {
    accountId: 8700345,
    accountType: "Checking",
    balance: 15000000,
}

const combineUserAndAccount = (user:UserT,account:AccountT):UserT & AccountT =>{
    return {...user,...account}
}

console.log(combineUserAndAccount(userObj,accountObj))