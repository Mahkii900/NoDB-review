import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Finder from './components/Finder'
import Pokedex from './components/Pokedex'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonArray: []
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Finder/>
        <Pokedex/>
      </div>
    );
  }
}

export default App;
