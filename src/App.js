import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import Letter from "./components/Letter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      score: 100,
      solution: {
        word: "CALM",
        hint: "Your ideal mood when coding.",
      },
    };
  }

  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }
  selectLetter = (letter) => {
    const newLetterStatus = { ...this.state.letterStatus };
    newLetterStatus[letter] = true;
    this.setState({ letterStatus: newLetterStatus });
    if (!this.state.solution.word.includes(letter)) {
      this.setState({ score: this.state.score - 20 });
    }
  };
  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution={this.state.solution}
        />
        <Letters
          letterStatus={this.state.letterStatus}
          selectLetter={this.selectLetter}
        >
          <Letter></Letter>
          <Letter></Letter>
        </Letters>
      </div>
    );
  }
}

export default App;
