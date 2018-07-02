// Generator Functions

/* 
  * Function that will wait until all values have yield via the function.next() being called.
*/

let genFunc = function* ()
{
  let one = yield;
  let two = yield;
  let three = yield;

  console.log(one);
  console.log(two);
  console.log(three);
}

let gen = genFunc(); // * Prepare the generator function.

gen.next(1); // * Pass 1 into the 'one' variables inside the generator function.
gen.next(2); // * Pass 2 into the 'two' variables inside the generator function.
gen.next(3); // * Pass 3 into the 'three' variables inside the generator function.

// ! gen.next() cannot be called again as all three values have yielded and so it is a closed generator function.

// TODO: Could add examples and notes here using promises. (for another time as not important rn)