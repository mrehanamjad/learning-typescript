// Call Signatures in TS:

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string;
  // (country: string) => string;
};

const student1: Student = {
  name: "Rehan",
  age: 18,
  greet: (country): string =>
    `Welcome My name is ${student1.name}, I am ${student1.age} year old and I am from ${country}`,
};

const student2: Student = {
  name: "Shang chi",
  age: 18,
  greet: (country): string =>
    `Welcome My name is ${student1.name}, I am ${student1.age} year old and I am from ${country}`,
};

const instruction = (student1: Student): string => {
  const { name, age } = student1;
  return `My name is ${name} and i am ${age} year old`;
};

console.log(student1.greet("pakistan"));
