// how to USE a function: functionName();
console.log("Good morning, Monica!");

//Variables

//DEFINING a variable in our program 
var myFirstVariable;
myFirstVariable = "My name is Monica.";
console.log(myFirstVariable);

var mySecondVariable = "My name is Earl.";

//The three most common data types

//Strings
"My name is Monica.";
"What is your name?";

//Number
10;
9;
0;
10000;
10.5;
-10.5;
"10" // NOT A NUMBER. this is a string.

// Boolean
true;
false;

//Mathematical operators
(10 + 10); // 20 addition -> sum
(5 - 10); // -5 subtraction -> difference
(2 / 5); // 0.4 division -> quotient
(10 * 5); // 50 multiplication -> product
(10 % 3); // 1 modulus -> modulo; helpful to check if something is odd or even

var myMostImportantNumber = (50 - 10);
console.log(myMostImportantNumber); // 40

var currentCTemp = 23;
var cToF = ((currentCTemp * (9/5)) + 32);

//Logical operators
// == Equal to
(100 == 100); // true
(101 == 100); // false
('raining' == 'sunny'); // false
('raining' == 'raining'); // true
('Raining' == 'raining'); // false bc of the capital R
(' raining' == 'raining'); // false bc of space 
(true == true); // true
(true == false); // false
(false == false); // true 

// >, < , >=, <= 

(100 > 40); // true
(100 < 40); // false
(-100 < 40);  // true
(100 <= 100); // true
(99 <= 100); // true

// Not equal to
(100 !== 100); // false
(100.1 !== 100); // true

// Bang operator 
!false; // true
!true; // false

(mySecondVariable == 'Eduardo'); //false

// Boolean operators

// || OR operator
(true || false); // true
(false || true); // true
(false || false) // false

// && operator
(true && false); // false
(true && true); // true
(false && false) // false

// Boolean operators can be chained 
(false || true || false) // becomes 
true || false // true

(100 == 100) || 50 == 51 || mySecondVariable == "Eduardo"
// becomes
true || mySecondVariable == 'Eduardo';


//Arrays and Objects

//Creating an array and storing it in a variable
var myFirstArray = ['important', 'not important'];
var daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]
console.log(myFirstArray[0]) // 'important'
console.log(daysOfWeek[4]) // 'Friday'

daysOfWeek[7] = 'Superday'; // Will add 'Superday' into the array at the 7th index

daysOfWeek = 'Superday'; // Will reassign the variable to 'Superday'

// Array Functions

// array.push() Adds the value to the end of the array

myFirstArray.push('hello');
console.log(myFirstArray); // ['important', 'not important', 'hello']

// array.pop() Removes the value at the end of the array

myFirstArray.pop(); // ['important', 'not important']

//array.unshift() Add the value to the start of the array

myFirstArray.unshift('sunny day'); // ['sunny day', 'important', 'not important']

//array.shift() Removes the value at the start of the array

myFirstArray.shift() // ['important', 'not important']

//array.splice() 

daysOfWeek.splice(3, 0, 'Breakday') // will add 'Breakday' at the third index


// Objects
var myFirstObject = {
    'firstName': 'Monica',
    'affiliation': 'MEDA',
    'age': 32
}

// bracket and dot notation 
myFirstObject['firstName'];
myFirstObject.age;

//adds new
myFirstObject.job = 'unemployed';
myFirstObject.favFood = 'rice';

// removes the key-value pair from the object
delete myFirstObject.age;

//Conditional statements. If statement needs to have a true value in order to run/execute the code block.

if (myFirstObject.firstName === 'Monica') {
    console.log('Welcome!');
}

var numberToTest = -15;
if (numberToTest > 0) {
    console.log('the number is positive.');
}
if (numberToTest === 0) {
    console.log('the number is zero.');
}
if (numberToTest < 0) {
    console.log('the number is negative.');
}