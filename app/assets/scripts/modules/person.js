function person (fullName, favColor){

  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function(){
    console.log("My name is "+ this.name +" and my favorite color is "+ this.favoriteColor +".");
  }
}
