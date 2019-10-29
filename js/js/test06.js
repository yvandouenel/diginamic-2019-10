window.onload = function() {
  const form = window.document.getElementById("form");
  form.onsubmit = block;
  function block(event) {
    event.preventDefault();
    console.log("Bloqué !!!");
    console.log(event);
  }
  /* link.onclick = function(event) {
    afficheLien(event,"hello");
  };
  function afficheLien(event,test) {
    event.preventDefault();
    console.log(event);
    console.log("Lien cliqué !" + test);
  } */
};
