// fonction de réussite
const success = () => {
  console.log("Dans success");
};
// fonction d'échec
const failure = () => {
  console.log("Dans failure");
};
// CALLBACK : fonction qui attend en paramètre
// des fonctions
const doSomething = (s, f) => {
  console.log("Dans doSomething");
  if (Math.random() < 0.5) {
    setTimeout(() => {
      s();
    }, 1000);
  } else {
    setTimeout(() => {
      f();
    }, 1000);
  }
};
doSomething(success, failure);
console.log("après appel de doSomething");
