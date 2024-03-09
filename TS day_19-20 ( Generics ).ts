//Generics in TypeScript allow you to create reusable components orfunctions that can work with multiple data types.

function logAndReturn<T>(value: T): T {
  return value;
}
// Using the generic function with different types
const numberResult: number = logAndReturn<number>(42);
const stringResult: string = logAndReturn<string>("Hello, Generics!");

const booleanResult: boolean = logAndReturn<boolean>(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

//? HomeWork Time
// Here is the function overloading Example? 
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   return a + b;
// }
// const result1 = add(5, 10); // Output: 15
// const result2 = add("Hello", " World!"); //output Hello World

// sol:
function add<T>(a: T, b: T): T {
  return a + b;
  //todo 👉 solve the error: Operator '+' cannot be applied to types 'T' and 'T'.ts(2365) in line:27 
}

const result1: number = add<number>(5, 10); // Output: 15 (type inferred as number)
const result2: string = add<string>("Hello", " World!"); // Output: Hello World! (type inferred as string)


console.log(result1);
console.log(result2);

// Multiple Type Variables Generics:

function ADD<T,U>(a: T, b: U, c?:boolean){
  console.log(typeof a);
  console.log(typeof b);
  if(c) console.log(c);
}

ADD<number, string>(5, " points"); 
ADD<string,boolean>("Hello", true); 
ADD<string,number>("Hello",55, true); 

//   ~~~  OR ~~~

ADD(5, " points");
ADD("Hello", true); 
ADD("Hello",55, true); 


