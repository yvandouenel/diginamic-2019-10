//req_token.open("GET", this.url_serveur + "rest/session/token/", true);
try {
  fetch("http://www.coopernet.fr/rest/session/tokenk/").then(function(
    response
  ) {
    if (response.status !== 200) {
      // Il y a un problème, le statut de la réponse
      // n'est pas le bon
      console.error("Erreur - statut : " + response.status);
    } else {
      // Ca roule... mais encore faut-il que la
      // réponse soit dans le bon format
      response.text().then(function(data) {
        console.log(data);
      });
    }
  });
} catch (error) {
  console.error("Erreur : " + error);
}
