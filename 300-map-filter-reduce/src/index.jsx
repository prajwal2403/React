import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumber = numbers.map(function (nums) { return nums * 2 })
console.log(newNumber);
//Filter - Create a new array by keeping the items that return true.
const newNumber1 = numbers.filter(function (nums) { if (nums > 10) return nums })
console.log(newNumber1);

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
