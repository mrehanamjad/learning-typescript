// tupples in tS

type enrollInfo = readonly [string, number, boolean];

const displayInrollInfo=(person:enrollInfo):void => {
    const [language,year,isLearning] = person;
    console.log(`Language: ${language}, Year: ${year} ,isLearning: ${isLearning}`);
}

const Person1: enrollInfo = ["Ts", 2024, true];
const Person2: enrollInfo = ["Java", 2024, false];

displayInrollInfo(Person1);
displayInrollInfo(Person2);


// Question 1:
// You are building a simple e-commerce application and need to store product information.Define a tuple type called Product Info to represent each product, containing the following elements:
// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.


type ProductInfo = readonly [string,number,number,]

const product1: ProductInfo = ["Laptop", 999.99, 10];
const product2: ProductInfo = ["Smartphone", 499.99, 20];

console.log(`Product name ${product1[0]}, Price ${product1[1]},Quantity in stock ${product1[2]}`)
console.log(`Product name ${product2[0]}, Price ${product2[1]},Quantity in stock ${product2[2]}`)


// Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:
// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in threedifferent subjects: Math, English, and Science. Calculate and display the average grade for the student.

type SubjectGrade = readonly [string,number]

const grades: SubjectGrade[] = [["Math", 85],["English", 90],["Science", 80]];
let sum:number = 0;
grades.forEach(grade => sum+=grade[1]);
console.log(`average = ${sum/grades.length}`);

//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information,containing the following elements:
// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData and displays the weather information for each city in a user-friendly format.

type WeatherData = [string,number,string];

const displayWeather = (infoW:WeatherData) => {
    const [city,temperature,condition] = infoW ;
    console.log(`Weather condition is ${condition} and temperature is ${temperature}°C in ${city}`)
}

displayWeather(["Karachi",36,"Clear"]);

