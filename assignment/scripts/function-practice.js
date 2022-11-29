console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return  'Hello, ' + name + "!";
}
// Remember to call the function to test
console.log ('Test - should say "Hello, Kathryn!"', helloName('Kathryn'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  return firstNumber + secondNumber;

  // return firstNumber + secondNumber;
}console.log('Test - should be "10"', addNumbers( 7 , 3));


// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNum, secondNum, thirdNum){
  return firstNum * secondNum * thirdNum;
}

console.log('Test - should be "30"', multiplyThree(5, 2, 3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array.at(-1);
}
let myArray = ['cat', 'dog', 'fish', 'toad'];
console.log('Test - should say "toad"', getLast(myArray));
let emptyArray = [];
console.log('Test - should say "undefined"', getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (thing of array){
    if (thing === value){
      return true;
    }
  }return false;
}
console.log('Test - should say "true"', find('cat', myArray));
console.log('Test - should say "true"', find('dog', myArray));
console.log('Test - should say "true"', find('fish', myArray));
console.log('Test - should say "true"', find('toad', myArray));
console.log('Test - should say "false"', find('apple', myArray));




// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)){
    return true;
  } return false;

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(Array) {
  let sum = 0
  // TODO: loop to add items
  for (num of Array){
    sum += num;
  }
  return sum;
}
let newArray = [3 , 4, 10, 20, 3];
console.log('Test - should be "40"', sumAll(newArray));
let thisArray = [300, 250, 500, 1000, 50, 10, 20];
console.log('Test - should be "2130"', sumAll(thisArray));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
