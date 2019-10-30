import React, { Component } from "react";
import Term from "./Term";
import Column from "./Column";
import { GiBrainTentacle } from "react-icons/gi";

class Table extends Component {
  state = {
    card_to_edit: {},
    terms: [
      { id: 1, name: "JS", selected: false },
      { id: 2, name: "HTML", selected: true },
      { id: 3, name: "CSS", selected: false },
      { id: 4, name: "REACT", selected: false },
      { id: 5, name: "NODE", selected: false }
    ],
    columns: [
      {
        id: 1,
        name: "A apprendre",
        cards: []
      },
      { id: 2, name: "Je sais un peu", cards: [] },
      { id: 3, name: "Je sais bien ", cards: [] },
      { id: 4, name: "Je sais parfaitement", cards: [] }
    ]
  };
  card_count = 0;
  getCardCount() {
    return this.card_count;
  }
  setCardCount(step) {
    this.card_count += step;
  }
  clickButton = (event, clickedTerm) => {
    console.log("Dans clickButton");
    // affecte false à tous les terms
    const state_local = { ...this.state };
    for (let i = 0; i < state_local.terms.length; i++) {
      state_local.terms[i].selected = false;
    }
    // affecter true à la propriété selected du term qui a été cliqué
    const clicked_index_term = state_local.terms.indexOf(clickedTerm);
    state_local.terms[clicked_index_term].selected = true;

    this.setState(state_local);
  };
  // Méthode pour ajouter une carte
  addCard = (e, target_column) => {
    console.log("dans addCard");
    // copie du state de table
    const state_local = { ...this.state };
    // incrémentation du compteur de card
    this.setCardCount(1);
    // Création de la nouvelle carte
    const new_card = {
      id: this.getCardCount(),
      question: "Question ?",
      response: "Réponse"
    };
    // index de la colonne concernée
    const index_column = state_local.columns.indexOf(target_column);
    // ajout de l'objet new_card dans la colonne concernée
    state_local.columns[index_column].cards.push(new_card);

    this.setState(state_local);
  };
  deleteCard = (e, card_to_delete, card_column) => {
    console.log("Dans deleteCard : Ils souffrent !");
    console.log("Carte à effacer : ", card_to_delete);

    const state_local = { ...this.state };

    // récupération de l'index de la colonne qui contient
    // la carte à supprimer
    const index_column = state_local.columns.indexOf(card_column);

    //index de la carte à supprimer
    const index_card = state_local.columns[index_column].cards.indexOf(
      card_to_delete
    );
    // Suppression de la carte dans le state local
    state_local.columns[index_column].cards.splice(index_card, 1);

    this.setState(state_local);
  };
  editCard = (e, card_to_edit, card_column) => {
    console.log("Dans editCard : Nous souffrons tous !");
    console.log("Carte à modifier : ", card_to_edit);

    const state_local = { ...this.state };
    // récupération de l'index de la colonne qui contient
    // la carte à supprimer
    const index_column = state_local.columns.indexOf(card_column);

    //index de la carte à modifier
    const index_card = state_local.columns[index_column].cards.indexOf(
      card_to_edit
    );

    // changement de la propriété form_status pour afficher
    // le formulaire
    state_local.card_to_edit = {
      column_index: index_column,
      card_index: index_card
    };

    this.setState(state_local);
  };
  showForm = () => {
    if (Object.keys(this.state.card_to_edit).length !== 0) {
      return (
        <form>
          <label>
            Question :
            <input
              type="text"
              name="question"
              value={
                this.state.columns[this.state.card_to_edit.column_index].cards[
                  this.state.card_to_edit.card_index
                ].question
              }
            />
          </label>
          <label>
            Reponse :
            <input type="text" name="response" />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  };
  render() {
    return (
      <section>
        <header>
          <h1>
            <GiBrainTentacle className="text-danger" />
            emo
          </h1>
          <nav>
            {this.state.terms.map(t => {
              return (
                <Term key={t.id} term={t} onClickTerm={this.clickButton} />
              );
            })}
          </nav>
        </header>

        <main className="container-fluid mt-4">
          {this.showForm()}
          <section className="row h-100">
            {this.state.columns.map(c => {
              // Création d'une instance de colonne
              // en passant en paramètre : column et onClickAddCard
              // column est un objet compris dans le state de table qui
              // comporte toutes les propriétés nécessaires à la création
              // d'une colonne
              // onClickAddCard est le paramètre qui permet de passer
              // à chaque colonne la référence à la méthode addCard de Table
              return (
                <Column
                  onDeleteCard={this.deleteCard}
                  key={c.id}
                  column={c}
                  onClickAddCard={this.addCard}
                  onEditCard={this.editCard}
                />
              );
            })}
          </section>
        </main>
      </section>
    );
  }
}

export default Table;
