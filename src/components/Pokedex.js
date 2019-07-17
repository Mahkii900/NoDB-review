import React, {Component} from 'react'
import Pokemon from './Pokemon'

export default class Pokedex extends Component {
    render() {
        return (
            <div>
                {this.props.pokemonArray.map(pokemon => (
                    <Pokemon key={pokemon.name} pokemonData={pokemon}/>
                ))}
            </div>
        )
    }
}