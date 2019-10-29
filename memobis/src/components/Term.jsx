import React, { Component } from "react";
class Term extends Component {
  state = {};

  render() {
    const buttonClass = () => {
      if (this.props.term_selected) return "toto selected";
      else return "toto";
    };
    return (
      <button
        id={this.props.id}
        onClick={e => {
          this.props.onclick(e, this.props.id); // la méthode manageButtonClick
          console.log("Click sur buton, this = ", this.props.id);
        }}
        className={buttonClass()}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Term;
