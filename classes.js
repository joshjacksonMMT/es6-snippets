//Classes

class Parent
{
  constructor()
  {

  }

  // * You can use static variables and functions

  static func()
  {

  }

  foo()
  {

  }

  bar()
  {

  }
}

const parent = new Parent();

parent.foo(); // * Calling a function on an instance.

Parent.func() // * Calling a static function on the class itself.

// Inheritance

class Child extends Parent()
{
  constructor()
  {
    super(); // * Call the base class's constructor
  }

  baz()
  {

  }
}

const child = Child();

child.baz();
child.bar(); // * Inherited function from Parent class.