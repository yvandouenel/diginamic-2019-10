function doSomething() {
  return new Promise(function(s, f) {
    if (Math.random() > 0.5) {
      s("de la première étape");
      // traitement uniquement en cas de reussite
      let p = new Promise(function(s, f) {
        if (Math.random() > 0.5) {
          s("après une première réussite");
        } else f("après une premiere réussite");
      });
      p.then(success, failure);
    } else f("de la première étape");
  });
}

const success = function(msg) {
  //console.log("Réussite " + msg);
  console.log("réussite " + msg);
  return "ok";
};
const failure = function(msg) {
  console.log("échec " + msg);
  return "bad";
};
const premierTraitementEnFonctionDuResultat = function(msg) {
  if (msg == "ok") {
    console.log("Traitement en cas de succès");
    if (Math.random() > 0.5) {
      return "ok";
    } else return "bad";
  } else {
    console.log("Traitement en cas d'échec");
    if (Math.random() > 0.5) {
      return "ok";
    } else return "bad";
  }
};

doSomething().then(success, failure);
