/* function doSomething(s, f) {
  if (Math.random() > 0.5) {
    s("glop");
  } else {
    f("pas glop");
  }
}
const success = function(msg) {
  console.log(msg);
};
const failure = function(msg) {
  console.log(msg);
};
doSomething(success, failure); */
// les callback
function doSomething() {
  return new Promise(function(s,f){
    if (Math.random() > 0.5) {
      s("complète");
    } else f("sur toute la ligne");
  })
}
const success = function(msg) {
  //console.log("Réussite " + msg);
  console.log("Première réussite " + msg);
  return "ok";
}
const premierTraitementEnFonctionDuResultat = function(msg) {
  if(msg == "ok") {
    console.log("Traitement en cas de succès");
    if (Math.random() > 0.5) {
      return "ok"
    } else return "bad";
  } else {
    console.log("Traitement en cas d'échec");
    if (Math.random() > 0.5) {
      return "ok"
    } else return "bad";
  }
}
const secondTraitementEnFonctionDuResultat = function(msg) {
  if(msg == "ok") {
    console.log("Traitement en cas de succès");
  } else {
    console.log("Traitement en cas d'échec");
  }
}
const failure = function(msg) {
  console.log("Premier échec " + msg);
  return "bad";
}

doSomething().then(success,failure).then(premierTraitementEnFonctionDuResultat).then(secondTraitementEnFonctionDuResultat);
