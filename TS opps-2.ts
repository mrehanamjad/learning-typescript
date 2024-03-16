// Inheritance in TS :

// Inheritance allows a class to reuse the functionality of an existing class without rewriting it.

// Inheritance is a mechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parent

class PersonS {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(){
    return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}.`
  }
}

//inheritance -- extends keyword

class Students extends PersonS{
    grade:number;
    constructor(name: string, age: number, hobbies: string[],grade:number){
        super(name,age,hobbies)
        this.grade = grade;
    }

    // introduce(): string {
    //     return `Hi, I'm ${this.name} and I'm in grade ${this.grade} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}.`
    // }

    //.......... OR............ 

    introduce(): string {
        return `${super.introduce()} I'm in grade ${this.grade}`
    }

}

const person1: PersonS = new PersonS("Rehan", 20, ["writing", "coding"]);
const person2: PersonS = new PersonS("Asgar", 48, ["playing cricket","coding",]);
const student01: PersonS = new Students("Ahmed", 37, ["writing", "biking"],12);

console.log(person1);
console.log(person2.introduce());
console.log(student01.introduce());
