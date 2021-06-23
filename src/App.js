import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import Letter from "./components/Letter";
import EndGame from "./components/EndGame";
class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      score: 100,
      win: false,
      solution: {
        word: "CALM",
        hint: "Your ideal mood when coding.",
      },
      legalityLetters: 0,
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
    } else {
      this.setState({ legalityLetters: this.state.legalityLetters + 1 });
      if (this.state.legalityLetters === this.state.solution.word.length - 1) {
        this.setState({ win: true });
      }
    }
  };
  render() {
    let pageContent;
    if (this.state.score <= 0 || this.state.win == true) {
      pageContent = (
        <EndGame score={this.state.score} word={this.state.solution.word} />
      );
    } else {
      pageContent = (
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
    return <div>{pageContent}</div>;
  }
}

export default App;
