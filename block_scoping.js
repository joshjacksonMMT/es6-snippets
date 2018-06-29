//Block Scoping [let] and [const]

//Let

// * Old Style

if (true)
{
  var b = 2;
}

// * Will print 2.
console.log(b);

// * Using let

if (true)
{
  let b = 2;
}

// * Will print undefined as b is scoped to the if statement.
console.log(b);

//Const
const foo = 1;

// * const works the same as let (in terms of scoping) but const cannot be overwritten.

foo = 4; // * this will error out.
