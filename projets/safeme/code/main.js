//import Document from "./modules/Document.js";
import Fetch from "./services/Fetch.js";

class Main {
  constructor() {
    //console.log("dans le constructeur");
    this.fetch = new Fetch();
    this.docs = [];

    // récupération des fichiers
    this.fetch.fetchDocuments(this.successFetchDoc, this.failureFetchDoc);
    // gestion des événements
    this.handleEvents();
  }
  handleEvents = () => {
    document.getElementById("select-sort").onchange = e => {
      const select = e.target;
      const optionvalue = select.options[select.selectedIndex].value;
      console.log("Dans onchange sort", "Selected option = ", optionvalue);

      if (optionvalue == "alpha") {
        // suppression des documents
        this.deleteDocs();
        // transformation du tableau (sort)
        this.docs = this.docs.sort(function(a, b) {
          return a.name == b.name ? 0 : +(a.name > b.name) || -1;
        });
        // Rappel de render File
        this.renderFiles();
      } else if (optionvalue == "date") {
        console.log("Classement par date");
        // suppression des documents
        this.deleteDocs();
        // transformation du tableau (sort)
        this.docs = this.docs.sort(function(a, b) {
          const date_a = new Date(a.date);
          const date_b = new Date(b.date);
          return a.date == b.date ? 0 : +(a.date > b.date) || -1;
        });
        // Rappel de render File
        this.renderFiles();
      }

      // Rappel de render File
      //this.renderFiles();
    };
  };
  deleteDocs = () => {
    // suppression des documents
    let element = document.getElementById("section-articles");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };
  successFetchDoc = data => {
    console.log("dans successFetchDoc");
    this.docs = data;
    this.renderFiles();
  };
  failureFetchDoc = () => {
    //console.log("dans failureFetchDoc");
  };

  isEmpty = obj => {
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  };
  /**
   *
   * @param {type de balise à créer } markup
   * @param {id de l'élément parent} parent_id
   * @param {liste d'attributs} attributes
   * @param {Texte} text
   *
   * @return the new markup element
   */
  createMarkup(markup, parent_id, attributes = [], text = "", prepend = false) {
    //console.log("Dans createMarkup ", "Prepend : ", prepend);
    const parent = document.getElementById(parent_id);
    const new_markup = document.createElement(markup);
    if (prepend) {
      parent.prepend(new_markup);
    } else parent.appendChild(new_markup);

    if (text) new_markup.textContent = text;
    if (attributes.length > 0) {
      for (let i = 0; i < attributes.length; i++) {
        if (!this.isEmpty(attributes[i])) {
          new_markup.setAttribute(attributes[i].attribute, attributes[i].value);
        }
      }
    }

    return new_markup;
  }
  /**
   *
   * @param {nom du document} docname
   * @param {id du document} docid
   * @param {date du document} docdate
   */
  createFile(docname, docid, docdate) {
    // ajout du wrapper du fichier
    console.log("dans createFile", docname);
    this.createMarkup("article", "section-articles", [
      {
        attribute: "class",
        value: "document p-4 border border-warning rounded"
      },
      {
        attribute: "id",
        value: docid
      }
    ]);

    // ajout de l'icône du pdf
    this.createMarkup(
      "i",
      docid,
      [
        {
          attribute: "class",
          value: "fas fa-file-pdf text-success"
        }
      ],
      "",
      true
    );
    // ajout du titre
    this.createMarkup(
      "h3",
      docid,
      [
        {
          attribute: "class",
          value: "title-file"
        }
      ],
      docname
    );
    // ajout de la date
    let french_date = new Date(docdate);
    french_date = french_date.toLocaleDateString("fr-FR");
    this.createMarkup(
      "div",
      docid,
      [
        {
          attribute: "class",
          value: "date"
        }
      ],
      french_date
    );
  }
  /**
   * Affichage des cartes
   */
  renderFiles = () => {
    // section qui regroupe tous les documents
    this.docs.map(doc => {
      this.createFile(doc.name, doc.id, doc.date);
    });
  };
}

const m = new Main();
