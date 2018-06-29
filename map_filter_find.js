//Map, Filter and Find

//Map

// * With Map you can take an array and then do something with every value in the array without explicitly looping through it.

let foo = [2, 4, 6, 8, 10];

// * This will create a new array (bar) where every value is 1 higher than the values in the foo array.
let bar = foo.map(val => val += 1);


//Filter
let words = ["Hello", "This", "Is", "A", "Test Of Array.Filter"];

// * This will result in a new array (filteredWords) that has the values from words with a length more than 4.
// * filteredWords = ["Hello", "Test Of Array.Filter"];
let filteredWords = words.filter(word => word.length > 4);

//Find

// * Find returns the first element in an array that matches a rule.

let numbers = [5, 12, 8, 130, 44];

// * matches will be equal to 12 as that is the first number that is more than 10 in the array.
let matches = numbers.find(number => number > 10);

console.log(matches);

