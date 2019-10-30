import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {
    return (
      <article
        id={this.props.card.id}
        className="border border-light rounded m-2"
      >
        <h3>{this.props.card.question}</h3>
        <p>{this.props.card.response}</p>
        <button
          onClick={e => {
            this.props.onDeleteCard(e, this.props.card, this.props.column);
          }}
          className="btn btn-danger"
        >
          Supprimer
        </button>
      </article>
    );
  }
}

export default Card;
