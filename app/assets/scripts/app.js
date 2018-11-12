var $ = require ('jquery');
var person = require ('./modules/person');


var john = new person ("Mosaab saleh", "Blue");
john.greet();

var joe = new person ("Joe Adam", "Orange");
joe.greet();
