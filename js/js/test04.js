class Person {
  constructor(nom, prenom){
    this.nom = nom;
    this.prenom = prenom;
  }
  sePresenter() {
    console.log("Je m'appelle " + this.prenom + " " + this.nom);
  }
}
class Enseignant extends Person {
  constructor(nom,prenom,diplome) {
    super(nom,prenom);
    this.diplome = diplome;
  }
  // Méthodes
  enseigner() {
    console.log("J'enseigne !");
  }
  // polymorphisme
  sePresenter() {
    console.log("Je m'appelle " +
    this.prenom + " " +
    this.nom + " et j'enseigne");
  }
}

// instance de l'objet b
const b = new Person("Dylan", "Bob");
b.sePresenter();
// instance de l'objet a
const a = new Person("Delon", "Alain");
a.sePresenter();

if (a.sePresenter === b.sePresenter) {
  console.log("les deux méthodes sont les mêmes");
} else {
  console.log("les deux méthodes ne sont pas les mêmes");
}
const e = new Enseignant("Bardot","Brigitte","Doctorante")
e.sePresenter();
e.enseigner();

