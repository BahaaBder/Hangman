import { Component } from "react";
import Letter from "./Letter";
class Solution extends Component {
  render() {
    let Letters = [];
    return (
      <div>
        {this.props.solution.word.split("").forEach((letter) => {
          if (this.props.letterStatus[letter]) {
            Letters.push(letter);
          } else {
            Letters.push(" _ ");
          }
        })}
        {Letters.map((letter) => (
          <Letter letter={letter} />
        ))}

        <div>{this.props.solution.hint}</div>
      </div>
    );
  }
}
export default Solution;

{
  /* 
this.props.solution.word.split("").map((letter) => (
          <Letter letter={letter} />
        ))} */
}
