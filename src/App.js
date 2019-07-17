import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
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
  componentDidMount() {
    axios.get('/api/pokemon').then(res => {
      this.setState({
        pokemonArray: res.data
      })
    })
}
  render() {
    return (
      <div className="App">
        <Header/>
        <Finder/>
        <Pokedex pokemonArray={this.state.pokemonArray}/>
      </div>
    );
  }
}

export default App;
