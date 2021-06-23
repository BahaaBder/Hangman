import { Component } from "react";
class Score extends Component {
  render() {
    if (this.props.score >= 80) {
      return <div className="high-score">{this.props.score}</div>;
    }
    if (this.props.score >= 50 && this.props.score < 80) {
      return <div className="medium-score">{this.props.score}</div>;
    }
    if (this.props.score < 50 && this.props.score > 0) {
      return <div className="low-score">{this.props.score}</div>;
    }
  }
}

export default Score;
