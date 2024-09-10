import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

 var numbers = [3, 56, 2, 48, 5]
//Map -Create a new array by doing something with each item in an array.
 const newNumbers = numbers.map(x => x*2);
 console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
 const newNumbers1 = numbers.filter(num => num>10);
console.log(newNumbers1);
//Reduce - Accumulate a value by doing something to each item in an array.
 var newNumber2 = numbers.reduce((accumulator, currentNumber) => (accumulator + currentNumber)
 )
console.log(newNumbers2);
////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
