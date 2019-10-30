import Person from "./Person.js";

class Student extends Person {
  constructor(n,f,grade) {
    super(n,f);
    this.grade = grade;
  }
}

let s = new Student("Shelby","Tommy","army");
s.presentMySelf();