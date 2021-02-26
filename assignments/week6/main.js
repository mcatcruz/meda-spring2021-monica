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

var numberToTest = 0;
if (numberToTest > 0) {
    console.log('the number is positive.');
} else {
    console.log('the number is NOT positive.');
}

if (numberToTest === 0) {
    console.log('the number is zero.');
} else {
    console.log('the number is not a zero.');
}


if (numberToTest < 0) {
    console.log('the number is negative.');
} else {
    console.log('the number is NOT negative.');
}

var personAge;

personAge = 13;
personLikesDrinking = true;

if (personAge >= 21 && personAge <= 25) {
    console.log('chug, chug, chug!');
    if (personLikesDrinking == true) {
        console.log('what do you want to drink?');
    }
} else if (personAge >= 26 && personAge <= 40) {
    console.log('let\'s go drink!');
} else {
    console.log('have you tried knitting?');
}

// While loops

var keepRunning = 0;

while (keepRunning < 10) {
    console.log('we ran the loop once!');
    keepRunning = keepRunning + 1;
    var count = 0;
    while (count < 10) {
        console.log('inner loop ran!');
        count = count + 1;
    
    }
}

//Do while loop - will always run the code block at least once before checking the condition

var personAnswer = 'no';

do {
    console.log('run it back!');
    personAnswer = prompt('keep going?');
} while (personAnswer === 'yes');

//For loop, "condition" area has THREE parts
// syntax: for (counter; condition; iterator) {}

for (var keepRunning = 0; keepRunning < 10; keepRunning = keepRunning + 1) {
    console.log('this for loop ran once!');
}

for (var i = 0; i < 10; i++) {
    if (valueFound == true) {
        break;
    }
}

// ++ = increment by one; same as i = i + 1
// -- = decrement by one

//break vs. continue - for when you find what you're looking for early. 
// break - exits the loop;
// continue - skips the specific iteration, but the loop keeps going

// .forEach() - a function for arrays that goes through each element of the array and does something to each element.

var someArray = [10, 20, 30, 40, 50]

someArray.forEach(function (arrayValue) {
    console.log(arrayValue + 100);
}); //expected output: 110, 120, 130, 140, 150



//Functions 

function myFirstFunction() {
    console.log('hello from first function!');
}

myFirstFunction(); //expected output: 'hello from first function!'


function addTwoNumbers(num1, num2) {
    var total = num1 + num2;
    console.log(total);
}


// Arguments are written winthin the parentheses of the CALL.

addTwoNumbers(10, 1);
addTwoNumbers(100, 5);
addTwoNumbers(-5, 10);

// Returning values from Functions

// Concatenation 

function makeExciting(sentence) {
    var excitingSentence = sentence + "!!!";
    console.log(excitingSentence);
    return excitingSentence;
}

var savedSentence = makeExciting('How are you doing');
var savedSentence2 = makeExciting('Would you like ice cream');

// Example Function

function mathSummarizer(num1, num2) {
    var sum = num1 + num2;
    var difference = num1 - num2;
    var differenceReverse = num2 - num1;
    var quotient = num1 / num2;
    var quotientReversed = num2/num1;
    var product = num1 * num2;

    var object = {
        "Sum": sum,
        "Difference": difference,
        "Difference Reverse": differenceReverse,
        "Quotient": quotient,
        "Quotient Reversed": quotientReversed,
        "Product": product
    };

    return object;

var number1 = 9;
var number2 = 15;
var results = mathSummarizer(number1, number2);

console.log(results);

var sumSentence = "The sum of 9 and 15 is " + results["Sum"];
console.log(sumSentence);


//expected output: 
// console.log(mathSummarizer(0, 0)); quotient and quotientReversed will result in NaN

}

function mathForMe(num1, num2) {
 
    var results = mathSummarizer(num1, num2);

    for (var keyName in results) {
        console.log("The " + keyName + " of " + num1 + " and " + num2 + " is " + results[keyName]);
    }
    
}
