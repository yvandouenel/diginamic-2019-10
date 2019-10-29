import React, { Component } from "react";
import Term from "./Term";
class Table extends Component {
  state = {
    terms: [
      { id: 1, name: "js", selected: false },
      { id: 2, name: "html", selected: false },
      { id: 3, name: "css", selected: false },
      { id: 4, name: "react", selected: false }
    ]
  };
  manageButtonClick = (e, button_id) => {
    console.log("dans manageButtonClick de table");
    console.log("this : ", this);

    const state_local = { ...this.state }; //clone de this.state
    // enlever partout le selected : mettre false à tous les selected
    for (let i = 0; i < state_local.terms.length; i++) {
      // selected = false
      state_local.terms[i].selected = false;
    }

    // Ajouter seulement au bouton cliqué selected = true
    // Récupérer l'index qui a pour id "button_id"
    let term_index = state_local.terms.findIndex(term => {
      return term.id === button_id;
    });
    state_local.terms[term_index].selected = true;

    this.setState(state_local);
  };
  render() {
    return (
      <section>
        <header>
          <h1>Memo</h1>
          <nav>
            {this.state.terms.map(term => {
              return (
                <Term
                  key={term.id}
                  id={term.id}
                  name={term.name}
                  term_selected={term.selected}
                  onclick={this.manageButtonClick}
                />
              );
            })}
          </nav>
        </header>
      </section>
    );
  }
}

export default Table;
