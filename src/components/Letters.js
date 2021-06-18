import { Component } from "react";
import Letter from "./Letter";
class Letters extends Component {
  render() {
    let Letters = [];
    return (
      <div>
        <div>Available Letters</div>
        {Object.keys(this.props.letterStatus).forEach((letter) => {
          if (this.props.letterStatus[letter]) {
            Letters.push(<Letter letter={letter} className="selectedLetter" />);
          } else {
            Letters.push(
              <Letter letter={letter} className="UnselectedLetter" />
            );
          }
        })}
        {Letters.map((item) => item)}
      </div>
    );
  }
}
export default Letters;

//Old Code ///
// {Object.keys(this.props.letterStatus).map((item) => (
//   <Letter letter={item} />
// ))}
