// How to crate a class and also instance of class in TS

// A class in terms of OOP is a blueprint for creating objects
// A class is like a blueprint for creating similar things.

// In TypeScript, there is a convention to use PascalCase (also known as UpperCamel Case) for class names. This means that class names should start with a capital letter and each subsequent word in the class name should also hodin with a capital letter.

class Persons {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

const p1: Persons = new Persons("Rehan", 20, ["writing", "coding"]);
const p2: Persons = new Persons("Asgar", 48, ["playing cricket", "coding"]);
const p3: Persons = new Persons("Ahmed", 37, ["writing", "biking"]);

console.log(p1)
console.log(p2)
console.log(p3)


//The this keyword in a constructor inside a class refers to the instance of the object being created. It's used to access and assign values to the instance's properties.
