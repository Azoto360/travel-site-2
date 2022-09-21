function Person(fullName, favColor) {
    this.name = fullName;
    this.favouriteColor = favColor;
    this.greet = function() {
      console.log("Hello, my name is " + this.name + " and my favourite color is " + this.favouriteColor + ".");
    }
  }
  

  export default Person 