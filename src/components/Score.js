import { Component } from "react";
class Score extends Component {
  render() {
    return <div className="guesses">{this.props.score}</div>;
  }
}

export default Score;
