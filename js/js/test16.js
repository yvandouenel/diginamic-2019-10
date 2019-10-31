fetch("http://www.coopernet.fr/rest/session/token/")
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Erreur (même si le server a répondu)- statut : " + response.status
      );
      return;
    }
    response.text().then(function(data) {
      console.log("token: ", data);
    });
  })
  .catch(error => {
    console.log("Erreur 'catchée' sur la promesse  ", error);
  });
