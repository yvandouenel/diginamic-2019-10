// fonction de réussite
const success = msg => {
  if (msg == "complet") console.log("Premier succès");
  if (msg == "ok") console.log("Deuxième succès consécutif");
  if (msg == "pas ok") console.log("Premier succès aprés un échec");

  return "ok";
};
// fonction d'échec
const failure = msg => {
  if (msg == "sur toute la ligne") console.log("Premier échec");
  if (msg == "ok") console.log("Echec après un succès");

  return "pas ok";
};
// fonction qui retourne une promise : fonction qui attend en paramètre
// des fonctions
const doSomething = () => {
  console.log("Dans doSomething");
  return new Promise((s, f) => {
    if (Math.random() > 0.5) {
      s("complet");
    } else f("sur toute la ligne");
  });
};

doSomething()
  .then(success, failure)
  .then(success)
  .then(success)
  .then(message => {
    console.log(message);
  });
