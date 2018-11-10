var person = require ('./modules/person');


var john = new person ("John Doe", "Blue");
john.greet();

var joe = new person ("Joe Doe", "Red");
joe.greet();

function person (fullName, favColor){

  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function(){
    console.log("My name is "+ this.name +" and my favorite color is "+ this.favoriteColor +".");
  }
}
