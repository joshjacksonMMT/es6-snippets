//Modules

// ! IN ANOTHER FILE CALLED myModule.js
module.exports.foo = function ()
{

};

module.exports.bar = function ()
{

};


// * Old Style
var myModule = require("myModule");
var foo = myModule.foo;
var bar = myModule.bar;

// * Using ES6 Imports
import myModule from "myModule";
var foo = myModule.foo;
var bar = myModule.bar;

// * Or you can use destructuring to import the functions directly.

import { foo, bar } from "myModule";

// * You can also export modules differently
export default function ()
{

}

// * You can also export variables

export var foo = 3;