import React, { Component } from "react";

export default class EndGame extends Component {
  render() {
    let pageContent;
    if (this.props.score <= 0) {
      pageContent = (
        <h1 className="loss">
          You Loss, the secret word is "{this.props.word}"
        </h1>
      );
    } else {
      pageContent = (
        <h1 className="won">You Win Your Score is : {this.props.score}</h1>
      );
    }
    return <div>{pageContent}</div>;
  }
}
