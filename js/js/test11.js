//req_token.open("GET", this.url_serveur + "rest/session/token/", true);
class Coopernet {
  constructor(url) {
    this.url = url;
    this.token = "";
    this.login = "guillaumedomergue933";
    this.pwd = "guillaumedomergue933";

    // appel du token.
    //En cas de succès : appellera les terms via this.successToken
    this.getToken(this.successToken);
  }
  getToken = successCallback => {
    try {
      fetch(this.url + "rest/session/token/").then(function(response) {
        if (response.status !== 200) {
          // Il y a un problème, le statut de la réponse
          // n'est pas le bon
          console.error("Erreur - statut : " + response.status);
        } else {
          // Ca roule... mais encore faut-il que la
          // réponse soit dans le bon format
          response.text().then(function(data) {
            console.log("token : ", data);
            // On appelle le callback
            successCallback(data);
          });
        }
      });
    } catch (error) {
      console.error("Erreur : " + error);
    }
  };
  successToken = token => {
    this.token = token;
    console.log("Token ok, connection = ", this);
    this.getTerms(this.successTerms);
    this.getCards(this.successCards);
  };
  successTerms = terms => {
    console.log("Terms ok : ", terms);
  };
  successTerms = cards => {
    console.log("Terms ok : ", cards);
  };
  getTerms = successCallback => {
    try {
      fetch(this.url + "memo/themes/", {
        credentials: "same-origin",
        method: "GET",
        headers: {
          "Content-Type": "application/hal+json",
          "X-CSRF-Token": this.token,
          Authorization: "Basic " + btoa(this.login + ":" + this.pwd) // btoa = encodage en base 64
        }
      }).then(function(response) {
        if (response.status !== 200) {
          // Il y a un problème, le statut de la réponse n'est pas le bon
          console.error("Erreur - statut : " + response.status);
        } else {
          // Ca roule... mais encore faut-il que la
          // réponse soit dans le bon format
          response.text().then(function(data) {
            console.log("terms : ", data);
            // On appelle le callback
            successCallback(data);
          });
        }
      });
    } catch (error) {
      console.error("Erreur : " + error);
    }
  };
  getCards = successCallback => {
    try {
      fetch(this.url + "memo/list_cartes_term/46/22", {
        //33 = uid - 25 = tid
        credentials: "same-origin",
        method: "GET",
        headers: {
          "Content-Type": "application/hal+json",
          "X-CSRF-Token": this.token,
          Authorization: "Basic " + btoa(this.login + ":" + this.pwd) // btoa = encodage en base 64
        }
      }).then(function(response) {
        if (response.status !== 200) {
          // Il y a un problème, le statut de la réponse n'est pas le bon
          console.error("Erreur - statut : " + response.status);
        } else {
          // Ca roule... mais encore faut-il que la
          // réponse soit dans le bon format
          response.json().then(function(data) {
            console.log("cards : ", data);
            // On appelle le callback
            //successCallback(data);
          });
        }
      });
    } catch (error) {
      console.error("Erreur : " + error);
    }
  };
}

const connection = new Coopernet("http://www.coopernet.fr/");
