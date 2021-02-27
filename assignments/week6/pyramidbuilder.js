/*

*
**
***
****
*****
****
***
**
*

*/



//This loop will create the TOP HALF of the pyramid
var maxHeight = 14
var currentColumn = '';
for (var i = 0; i < maxHeight; i++) {

    currentColumn = currentColumn + '*';
    console.log(currentColumn);
}

//this loops one less time than the loop above because line 19 goes up to the max amount of asterisks
// otherwise there will be an extra space at the end of the loop
for (var i = 0; i < (maxHeight - 1); i++) { 
    currentColumn = removeLastChar(currentColumn);
    console.log(currentColumn);
}

//This function will create the BOTTOM HALF of the pyramid
function removeLastChar(text) {
    var textArray = text.split(''); // turn string into an array
    textArray.pop(); 
    var newText = textArray.join(''); // turns array into a string
    return newText;
}



/* MANUAL BOTTOM HALF OF PYRAMID:

    console.log('currentColumn end: ' + currentColumn);
    var asteriskArray = currentColumn.split('');
    console.log(asteriskArray);
    asteriskArray.pop();
    console.log(asteriskArray);
    var newString = asteriskArray.join('');
    console.log(asteriskArray) */
















// String to Array
var myString = 'Monica';
var myNewArray = myString.split('');

console.log(myNewArray); //expected output: ['M', 'o', 'n', 'i', 'c', 'a']

myNewArray.pop(); //expected output: ['M', 'o', 'n', 'i', 'c']

// Array to String

var myNewString = myNewArray.join('');

console.log(myNewString); //expected output: 'Monic'