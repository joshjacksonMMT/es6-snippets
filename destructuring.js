//Destructuring

var foo =
{
  bar: 1,
  baz: 2
}

//Instead of:
var bar = foo.bar;
var baz = foo.baz;

//You can do:
var { bar, baz } = foo;

//Can also be done with arrays:
var tenses = ["me", "you", "he"];

var { firstPerson, secondPerson, thirdPerson } = tenses;

//It is very useful if dealing with multiple promises in a Promise.all
Promise.all([promise1, promise2]).then(function ([result1, result2])
{
  // * We have destructured the array of promises into their single results that we can use individually.
  // * We could have just gotten the array, but this way is slightly nicer and uses ES6+ functionality.

  // TODO: Use result 1 and/or result 2 here.

});

// You can also destructure objects
var foo = 2;

var obj =
{
  bar: 1,
  foo, // * If a variable within scope with the same name exists and you want to use its value, just leave out a value.
}

//You can also destructure arguments

// * The arguments are used as an object that gets destructured as we we enter the function.
// * This negates incorrect order of arguments when a function is called, and also allows us
// * to leave out arguments without passing in null as they will just be marked undefined.
function calculateBMI({ weight, height, max, callback })
{
  var bmi = weight / Math.pow(height, 2);

  if (callback)
  {
    callback(bmi);
  }
}

// * Here we have swapped the order of weight and height, and left out the max value. This will work fine.
calculateBMI({ height, weight, callback: function () { } });