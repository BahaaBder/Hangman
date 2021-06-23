import { Component } from "react";

class Letter extends Component {
  constructor() {
    super();
  }
  selectLetter = () => {
    this.props.selectLetter(this.props.letter);
  };
  render() {
    return (
      <span className={this.props.className} onClick={this.selectLetter}>
        {this.props.letter}
      </span>
    );
  }
}
export default Letter;
