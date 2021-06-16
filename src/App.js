import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Score  from './components/Score';
import Solution from  './components/Solution';
import Letters from  './components/Letters';
import Letter from './components/Letter'

 class App extends Component{


render(){
return(
  <div>
    <Score/>
    <Solution/>
    <Letters><Letter></Letter><Letter></Letter>
    
  </Letters>
  </div>
)
}


}

export default App;
