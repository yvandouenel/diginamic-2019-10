window.onload = function() {
  const form = document.getElementById("form");
  class Person {
    constructor(n) {
      this.name = n;
    }
    manageSubmit = function() {
      // Si une arrow function est utilisée dans une classe
      // alors this est l'instance de la classe en question
      // if you use an arrow function in a class
      // then "this" is the "instance" of the class (here Person)
      form.onsubmit = e => {
        e.preventDefault();
        console.log("Après la soumission du formulaire");
        console.log(this);
      };
    };
  }
  const p = new Person("Dylan");
  p.manageSubmit();
};
/* */
