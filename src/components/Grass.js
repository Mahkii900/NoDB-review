import React, {Component} from 'react'

export default class Grass extends Component {
    constructor() {
        super()
        this.state = {
            pokemonName: '',
            pokemonImg: '',
            caught: false
        }
    }
    
    catchPokemon() {
        const body = {
            name: this.props.pokeData.name,
            img: this.props.pokeData.sprites.front_shiny
        }
        this.props.catchFn(body)
        this.setState({caught: true})
    }

    render() {
        return (
            <div>
              {this.state.caught ? null : this.props.pokeData.name}
              {this.state.caught ? null : (
                <img
                  onClick={() => this.catchPokemon()}
                  src={this.props.pokeData.sprites.front_shiny}
                  alt={this.props.pokeData.name}
                />
              )}
            </div>
        )
    }
}