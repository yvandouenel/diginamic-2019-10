export default class Person {
  constructor(n,f) {
    this.name = n;
    this.firstname = f;
  }
  presentMySelf = function() {
    console.log("Hello, my name is " + this.name);
  }
}