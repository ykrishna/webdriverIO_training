var {square, diag} = require("./lib");

var minimist = require('minimist');

var anArray = ['zero', 'one', 'two', 'three', 'four'];
var slicedArray = anArray.slice(2, -1);

//Array.slice([Number,Optional]start,[Number,Optional]end)(array) Array<T>

console.log(...anArray);
console.log(slicedArray);

console.log(process.cwd()); // to print current working directory
console.log(process.stdout.write('process.stdout.write function will return -- '));
console.log(process.argv); // what arguments are sending from command
console.log(square(4));
console.log(diag(4, 3));