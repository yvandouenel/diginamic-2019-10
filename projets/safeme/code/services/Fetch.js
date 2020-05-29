export default class Fetch {
  constructor() {}
  fetchDocuments = (success, failure) => {
    console.log("dans fetchDocuments");
    fetch("./services/files.json")
      .then(function(response) {
        if (response.status !== 200) {
          console.error(
            "Erreur (même si le server a répondu)- statut : " + response.status
          );
          return;
        }
        response.json().then(function(data) {
          //console.log("files: ", data);
          success(data);
        });
      })
      .catch(error => {
        console.error("Erreur 'catchée' sur la promesse  ", error);
      });
  };
}
