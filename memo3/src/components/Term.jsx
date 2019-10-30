import React, { Component } from "react";
class Term extends Component {
  state = {};
  classButton = () => {
    if (this.props.term.selected) return "btn btn-warning mr-2 ml-2";
    else return "btn btn-primary mr-2 ml-2";
  };
  render() {
    return (
      <button
        className={this.classButton()}
        onClick={e => {
          this.props.onClickTerm(e, this.props.term);
        }}
        id={this.props.term.id}
      >
        {this.props.term.name}
      </button>
    );
  }
}

export default Term;
