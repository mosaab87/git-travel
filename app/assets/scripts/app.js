var $ = require ('jquery');
var person = require ('./modules/person');


var john = new person ("John Doe", "Blue");
john.greet();

var joe = new person ("Joe Adam", "Orange");
joe.greet();
