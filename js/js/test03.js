function Person(nom, prenom) {
  this.nom = nom;
  this.prenom = prenom;
}
Person.prototype.sePresenter = function() {
  console.log("Je m'appelle " + this.prenom + " " + this.nom);
};

// instance de l'objet b
const b = new Person("Dylan", "Bob");
b["sePresenter"]();
// instance de l'objet a
const a = new Person("Delon", "Alain");
a.sePresenter();

if (a.sePresenter === b.sePresenter) {
  console.log("les deux méthodes sont les mêmes");
} else {
  console.log("les deux méthodes ne sont pas les mêmes");
}
console.log(Person.prototype);
