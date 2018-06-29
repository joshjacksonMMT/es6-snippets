//Arrow Functions

// * Old Style
var foo = function (a, b)
{
  return a + b;
}

// * Arrow functionsa
let foo = (a, b) =>
{
  return a + b;
}

// * Single line functions that return something can be cleaned up a lot.

let foo = (a, b) => a + b;

// * If a function only has 1 parameter, you can clean it up even more.
// * Here we use the map function and increment everything in the array.

[0, 1, 2].map(val => val++);

// Binding this

// * Old Style
const module =
{
  age: 30,
  foo: function ()
  {
    setTimeout(function ()
    {
      console.log(this.age); // ! this will error out because this. is not bound to the object.
    }, 1000);
  }
};

// * Using Arrow Functions
const module =
{
  age: 30,
  foo: function ()
  {
    setTimeout(() =>
    {
      console.log(this.age); // * this will work because arrow functions keep this. to their context.
    }, 1000);
  }
};